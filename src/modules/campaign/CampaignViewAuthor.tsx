import Avatar from '~/components/avatar'
import Skeleton from '~/components/skeleton'
import { cn } from '~/utils/scripts'

interface ICampaignViewAuthor {
  className?: string
  amountCampaigns: string
  author: string
  country: string
  avatar: string
  isLoading?: boolean
  classNameSkeleton?: string
}
export const CampaignViewAuthor: React.FC<ICampaignViewAuthor> = ({
  amountCampaigns = '',
  author = '',
  country = '',
  avatar = '',
  className,
  isLoading
}) => {
  return (
    <div className={cn('flex items-center gap-x-5 mb-9', className)}>
      <Avatar
        src={avatar}
        isLoading={isLoading}
        alt={author}
        className='w-[60px] h-[60px] rounded-full'
        classNameSkeleton='rounded-full'
      />
      <div className='flex-1 flex flex-col'>
        <div className='flex items-center gap-x-4'>
          <h3 className='text-text1 dark:text-white text-lg font-medium'>
            {isLoading ? <Skeleton className='w-20 h-3  mb-1' /> : author}
          </h3>
          <div className='flex items-center '>
            {isLoading ? (
              <Skeleton className='w-20 mb-1 h-3' />
            ) : (
              Array(5)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-4 h-4 text-yellow-500'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                      clipRule='evenodd'
                    />
                  </svg>
                ))
            )}
          </div>
        </div>
        <div className='flex items-center gap-x-3 text-text3 text-sm'>
          <strong className='text-primary'>
            {isLoading ? <Skeleton className='w-20 h-3 mb-1' /> : `${amountCampaigns} Campaign`}
          </strong>
          {isLoading ? (
            <Skeleton className='w-[6px] h-[6px] rounded-full' />
          ) : (
            <span className='block w-[6px] h-[6px] rounded-full bg-text3' />
          )}

          <span>{isLoading ? <Skeleton className='w-16 h-3' /> : country}</span>
        </div>
      </div>
    </div>
  )
}
