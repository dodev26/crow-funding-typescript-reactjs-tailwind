import Skeleton from '~/components/skeleton'
import { cn } from '~/utils/scripts'

interface ICampaignMetaProps {
  amount: number | string
  text: string
  isLoading?: boolean
  className?: string
  classNameSkeleton?: string
  size?: 'small' | 'big'
}

export const CampaignMeta = ({
  amount,
  isLoading = false,
  classNameSkeleton,
  text,
  className,
  size = 'small'
}: ICampaignMetaProps) => {
  const styles = cn(`flex flex-col items-start gap-y-1`, className)
  if (isLoading) {
    return (
      <div className={cn(styles, classNameSkeleton)}>
        <Skeleton className={cn('h-6 w-24')} />
        <Skeleton className={cn('h-3 w-24')} />
      </div>
    )
  }
  return (
    <div className={styles}>
      <h4
        className={cn('font-bold lg:font-semibold  text-text2 dark:text-text4', {
          'text-sm': size === 'small',
          'text-base lg:text-xl': size === 'big'
        })}
      >
        {amount}
      </h4>
      <span
        className={cn(`text-text4 dark:text-text3`, {
          'text-xs': size === 'small',
          'text-sm lg:text-base': size === 'big'
        })}
      >
        {text}
      </span>
    </div>
  )
}
