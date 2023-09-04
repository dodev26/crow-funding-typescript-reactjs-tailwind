import { useParams } from 'react-router-dom'
import PageTitle from '~/components/pageTitle'
import { CampaignView } from '~/modules/campaign'

export const CampaignDetailPage = () => {
  const { slug } = useParams()
  const nameCampaign =
    slug
      ?.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') || ''

  return (
    <>
      <PageTitle>{nameCampaign}</PageTitle>
      <CampaignView />
    </>
  )
}
