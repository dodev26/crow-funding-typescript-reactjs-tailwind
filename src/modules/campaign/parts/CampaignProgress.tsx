import Skeleton from '~/components/skeleton'
import { cn } from '~/utils/scripts'

interface ICampaignProgress {
  isLoading?: boolean
  className?: string
  classNameSkeleton?: string
  progress: number
}
export const CampaignProgress: React.FC<ICampaignProgress> = ({
  isLoading = false,
  className,
  classNameSkeleton = 'h-full',
  progress
}) => {
  const styles = cn('w-full rounded-full dark:bg-darkSoft bg-[#EFEFEF] h-1 mb-6', className)

  if (isLoading) {
    return (
      <div
        className={cn(styles, {
          'bg-transparent': isLoading
        })}
      >
        <Skeleton className={classNameSkeleton} />
      </div>
    )
  }

  return (
    <div className={styles}>
      <div
        className={`h-full rounded-full w-0 max-w-full  bg-primary/80 transition-all duration-500`}
        style={{
          width: `${progress}%`
        }}
      />
    </div>
  )
}
