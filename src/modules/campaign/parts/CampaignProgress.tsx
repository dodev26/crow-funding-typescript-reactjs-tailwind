import { useEffect, useState } from 'react'
import Skeleton from '~/components/skeleton'
import { cn } from '~/utils/scripts'

interface ICampaignProgress {
  isLoading?: boolean
  className?: string
  classNameSkeleton?: string
}
export const CampaignProgress: React.FC<ICampaignProgress> = ({
  isLoading = false,
  className,
  classNameSkeleton = 'h-full'
}) => {
  const [progress, setProgress] = useState(0)
  const styles = cn('w-full rounded-full dark:bg-darkSoft bg-[#EFEFEF] h-1 mb-6', className)

  useEffect(() => {
    let timer: any = null
    if (!isLoading) {
      timer = setTimeout(() => {
        setProgress(Math.floor(Math.random() * 100))
      }, 500)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [])

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
        className={`h-full rounded-full w-0  bg-primary/80 transition-all`}
        style={{
          width: `${progress}%`
        }}
      />
    </div>
  )
}
