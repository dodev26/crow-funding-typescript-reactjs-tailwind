import classNames from 'classnames'
import { CampaignAuthor, CampaignCategory, CampaignDesc, CampaignImage, CampaignMeta, CampaignTitle } from './parts'

interface ICampaignItem {
  classNameWrapper?: string
  isLoading?: boolean
}
export const CampaingnItem = ({ classNameWrapper, isLoading = false }: ICampaignItem) => {
  return (
    <div className={classNames('campaign-item dark:rounded-[15px] dark:bg-darkSecondary', classNameWrapper)}>
      <CampaignImage
        classNameSkeleton='rounded-2xl'
        isLoading={isLoading}
        className='h-[158px] rounded-2xl'
        imageAlt='img'
        imageUrl='https://plus.unsplash.com/premium_photo-1675756583871-6be3905c4ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
      />
      <div className='px-2 lg:px-5 py-4 '>
        <CampaignCategory classNameSkeleton='w-2/4' isLoading={isLoading} nameCategory='Education' pathCategory='/' />
        <CampaignTitle classNameSkeleton='w-full h-3' isLoading={isLoading}>
          Powered Kits Learning Boxes
        </CampaignTitle>
        <CampaignDesc isLoading={isLoading} className='mb-[15px]'>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampaignDesc>
        <div className='flex items-start justify-between gap-x-5 mb-5'>
          <CampaignMeta isLoading={isLoading} text='Raised of $1,900' amount={'$2,000'} />
          <CampaignMeta isLoading={isLoading} text='Total backers' amount={173} />
        </div>
        <CampaignAuthor
          isLoading={isLoading}
          imgAvatar='https://images.unsplash.com/photo-1688751900790-c6c737aff564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          authorName='dopdn'
        />
      </div>
    </div>
  )
}
