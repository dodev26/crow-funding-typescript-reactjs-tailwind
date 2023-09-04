import Skeleton from '~/components/skeleton'
import { cn } from '~/utils/scripts'

interface ICampaignDesc {
  className?: string
  isLoading?: boolean
  classNameSkeleton?: string
  children: React.ReactNode
}
export const CampaignDesc = ({ className, classNameSkeleton, isLoading, children }: ICampaignDesc) => {
  const styles = cn('font-normal text-sm text-text3 line-clamp-2', className)
  if (isLoading) {
    return (
      <div className={cn(styles, 'flex flex-col gap-y-1', classNameSkeleton)}>
        <Skeleton className='w-full' />
        <Skeleton className='w-[80%]' />
      </div>
    )
  }
  return <p className={styles}>{children}</p>
}
