import { useTranslation } from 'react-i18next'
import { v4 } from 'uuid'
import Gap from '~/components/gap'
import { Heading } from '~/components/heading/Heading'
import { CampaignFeatures, CampaignGrid, CampaingnItem } from '~/modules/campaign'
import { lang } from './lang'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '~/firebase/initialize'
import { useEffect, useState } from 'react'
import { useAppSelector } from '~/hooks/hooks'
import { RootState } from '~/store/configureStore'
import { Campaign } from '~/types/campaign'
import { toast } from 'react-toastify'
import { PATH } from '~/constants'

export const DashboardPage = () => {
  const { t } = useTranslation()
  const { user } = useAppSelector((state: RootState) => state.auth)
  const [isLoading, setIsLoading] = useState(false)
  const [yourCampaigns, setYourCampaigns] = useState<Required<Campaign[]>>([])

  const amountCampaigns = yourCampaigns.length || 0
  const newLastestCampaigns = yourCampaigns[yourCampaigns.length - 1] || {
    category: '',
    title: '',
    sort_description: '',
    images: []
  }

  const fetchYourCampaigns = async () => {
    setIsLoading(true)
    try {
      const colCampaignRef = collection(db, 'campaigns')
      const queries = query(colCampaignRef, where('idAuthor', '==', user?.uid))
      const querySnapshot = await getDocs(queries)
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      })) as Campaign[]
      setYourCampaigns(data)
    } catch (error) {
      toast.error('error fetch your campaign')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchYourCampaigns()
  }, [])

  return (
    <>
      <Heading isLoading={isLoading} as='h2' number={amountCampaigns}>
        {t(lang.yourCampaign())}
      </Heading>
      <CampaignFeatures
        isLoading={isLoading}
        href={`${PATH.campaign}/${newLastestCampaigns.slug}-${newLastestCampaigns.id}`}
        category={newLastestCampaigns.category}
        title={newLastestCampaigns.title}
        sortDesc={newLastestCampaigns.sort_description}
        image={Array.from(newLastestCampaigns.images as string[])[0]}
      />
      <Gap />
      <Heading isLoading={isLoading} as='h2'>
        {t(lang.popularCampaign())}
      </Heading>
      <CampaignGrid className='grid-cols-1 sm:grid-cols-2'>
        {Array(4)
          .fill(0)
          .map((_) => (
            <CampaingnItem isLoading={isLoading} key={v4()} />
          ))}
      </CampaignGrid>
    </>
  )
}
