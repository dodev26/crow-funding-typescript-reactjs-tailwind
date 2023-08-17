import { useEffect, useState } from 'react'
import { CampaignCategory, CampaignDesc, CampaignImage, CampaignMeta, CampaignProgress, CampaignTitle } from './parts'

interface ICampaignFeatures {
  isLoading?: boolean
  image: string
  category: string
  title: string
  sortDesc: string
  href?: string
}
export const CampaignFeatures: React.FC<ICampaignFeatures> = ({
  image = '',
  category = '',
  isLoading,
  sortDesc = '',
  title = '',
  href = '/'
}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      const ramdomProgress = Math.floor(Math.random() * 100)
      setProgress(ramdomProgress)
    }, 1000)
  }, [])

  return (
    <div className='flex flex-col sm:flex-row gap-y-[22.5px] lg:gap-y-0 items-center gap-x-[30px] w-full max-w-[1048px]'>
      <CampaignImage
        isLoading={isLoading}
        imageUrl={
          image ||
          "https://plus.unsplash.com/premium_photo-1675756583672-04a27dfe1f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'"
        }
        imageAlt={'image of' + title}
        className='h-[266px] flex-1  rounded-2xl overflow-hidden'
      />
      <div className='flex-1 max-w-[435px]'>
        <CampaignCategory
          classNameSkeleton='w-2/4 h-[20px]'
          isLoading={isLoading}
          nameCategory={category}
          pathCategory='/'
          className='mb-4 text-sm'
        />
        <CampaignTitle
          classNameSkeleton='h-[28px] w-full'
          isLoading={isLoading}
          href={href}
          className='font-bold mb-4 text-xl line-clamp-2'
        >
          {title}
        </CampaignTitle>
        <CampaignDesc
          classNameSkeleton='flex flex-col gap-y-1'
          isLoading={isLoading}
          className='mb-6 text-sm line-clamp-3'
        >
          {sortDesc}
        </CampaignDesc>
        <CampaignProgress isLoading={isLoading} />
        <div className='flex items-start gap-x-5 justify-between'>
          <CampaignMeta isLoading={isLoading} amount='$2,000' text='Raised of $2,500' size='big' />
          <CampaignMeta isLoading={isLoading} amount='173' text='Total backers' size='big' />
          <CampaignMeta isLoading={isLoading} amount='30' text='Days left' size='big' />
        </div>
      </div>
    </div>
  )
}
