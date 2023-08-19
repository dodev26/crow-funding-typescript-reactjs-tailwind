import Button from '~/components/button'
import { CampaignGrid, CampaignPerk, CampaignSupport, CampaignViewAuthor, CampaingnItem } from '.'
import {
  CampaignCarousel,
  CampaignCategory,
  CampaignDesc,
  CampaignImage,
  CampaignMeta,
  CampaignProgress,
  CampaignTitle
} from './parts'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'

import { toast } from 'react-toastify'
import { Campaign } from '~/types/campaign'
import { Heading } from '~/components/heading/Heading'
import { db } from '~/firebase/initialize'
import { useParams } from 'react-router-dom'

const MIDDLE_BAR = [
  {
    title: 'Campaign'
  },
  {
    title: 'Risks'
  },
  {
    title: 'FAQ'
  },
  {
    title: 'Updates'
  },
  {
    title: 'Comments'
  }
]
type CampaignType = Campaign
export const CampaignView = () => {
  const [campaign, setCampaign] = useState<CampaignType>({
    amount_prefilled: 0,
    campaign_end_method: '',
    category: '',
    country: '',
    createdAt: new Date(),
    end_date: new Date(),
    goal: 0,
    images: [],
    raised_amount: 0,
    slug: '',
    sort_description: '',
    start_date: new Date(),
    story: '',
    title: '',
    updatedAt: new Date(),
    video_url: '',
    author: '',
    avatar: '',
    idAuthor: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [currentImg, setCurrentImg] = useState<string>('')
  const { slug: SlugCampaign } = useParams()
  const idCampaign = SlugCampaign?.split('-')[SlugCampaign?.split('-').length - 1]

  const { category, country, author, avatar, images, sort_description, story, title } = campaign

  const firstImage = Array.from(images as string[])[0]
  const ImagesOther = Array.from(images as string[]).slice(1)

  useEffect(() => {
    if (firstImage) {
      setCurrentImg(firstImage)
    }
  }, [firstImage])

  const handleViewImg = (url: string) => {
    setCurrentImg(url)
  }

  const getCampain = async (id: string) => {
    setIsLoading(true)
    try {
      const campaignsRef = doc(db, 'campaigns', `${id}`)
      const data = await getDoc(campaignsRef)
      if (data.exists()) {
        setCampaign(data.data() as CampaignType)
      }
    } catch (error) {
      toast.error("fetch campaign's data failed")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getCampain(idCampaign as string)
  }, [idCampaign])

  return (
    <>
      <div
        className='md:h-[140px] h-[119px] rounded-3xl bg-cover bg-no-repeat bg-center gradient-banner flex items-center justify-center text-white text-xl  md:text-[40px] font-bold'
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1688809957913-0ecfb2d32dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)`
        }}
      >
        Education
      </div>
      <div className='flex flex-col md:flex-row  items-start gap-x-10 w-full max-w-[1066px] mt-10'>
        <div className='flex-1 w-full'>
          <CampaignImage
            isLoading={isLoading}
            imageUrl={currentImg}
            imageAlt='img'
            className='h-[210px] w-full md:h-[398px] mb-[30px] overflow-hidden rounded-2xl'
          />
          <CampaignCarousel onClick={handleViewImg} isLoading={isLoading} images={ImagesOther} />
        </div>
        <div className='flex-1 md:max-w-[443px] max-w-full mt-4 md:mt-0'>
          <CampaignCategory
            isLoading={isLoading}
            classNameSkeleton='w-2/4 h-[20px]'
            nameCategory={category}
            pathCategory='/'
            className='mb-4 text-sm'
          />
          <CampaignTitle
            title={title}
            classNameSkeleton='h-[28px] w-full'
            isLoading={isLoading}
            className='font-bold mb-4 text-xl line-clamp-2'
          >
            {title}
          </CampaignTitle>
          <CampaignDesc
            isLoading={isLoading}
            classNameSkeleton='flex flex-col gap-y-1'
            className='mb-6 text-sm line-clamp-2 leading-5'
          >
            {sort_description}{' '}
          </CampaignDesc>
          <CampaignViewAuthor
            isLoading={isLoading}
            author={author}
            amountCampaigns='1'
            avatar={avatar}
            country={country}
          />
          <CampaignProgress isLoading={isLoading} className='h-1' classNameSkeleton='h-full' />
          <div className='flex items-start gap-x-5 justify-between'>
            <CampaignMeta isLoading={isLoading} amount='$2,000' text='Raised of $2,500' size='big' />
            <CampaignMeta isLoading={isLoading} amount='173' text='Total backers' size='big' />
            <CampaignMeta isLoading={isLoading} amount='30' text='Days left' size='big' />
          </div>
          <Button disabled={isLoading} kind='primary' type='button' className='w-full mt-4'>
            Back this project
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-center w-full mt-[30px] md:mt-[60px] dark:bg-darkSecondary bg-white p-5 border-b border-b-slate-200 dark:border-none'>
        <div className='flex items-center justify-between md:justify-stretch  flex-1 md:gap-x-[40px] lg:gap-x-[60px] text-xs md:text-sm font-medium text-text3'>
          {MIDDLE_BAR.map((item, index) => (
            <span key={index} className='cursor-pointer first:text-secondary'>
              {item.title}
            </span>
          ))}
        </div>
        <Button className='hidden md:inline-block' kind='primary'>
          Back this project
        </Button>
      </div>
      <div className='grid md:gap-x-[40px] xl:gap-x-[124px] md:grid-cols-[1.3fr,1fr] mt-[35px] max-w-[1170px] mx-auto'>
        <div>
          <h2 className='text-lg dark:text-white font-semibold uppercase mb-5'>STORY</h2>
          <div
            className='bg-white lg:px-4 dark:bg-darkSecondary dark:text-text3  w-full'
            dangerouslySetInnerHTML={{ __html: story }}
          ></div>
        </div>
        <div className='mt-10 md:mt-0'>
          <CampaignSupport />
          <div className='mb-[60px]' />
          <div className='flex flex-col gap-y-[30px]'>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <CampaignPerk key={index} />
              ))}
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <Heading as='h2' className='mb-10 text-xl dark: font-semibold dark:text-white'>
          You also may be interested in
        </Heading>
        <CampaignGrid>
          <CampaingnItem />
          <CampaingnItem />
          <CampaingnItem />
          <CampaingnItem />
        </CampaignGrid>
      </div>
    </>
  )
}
