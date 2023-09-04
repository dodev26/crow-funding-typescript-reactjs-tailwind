import { useAutoAnimate } from '@formkit/auto-animate/react'
import { SkeletonForMedia } from '~/components/skeleton/Skeleton'
import { cn } from '~/utils/scripts'

interface ICampaignImageProps {
  imageUrl: string
  imageAlt: string
  className?: string
  isLoading?: boolean
  classNameSkeleton?: string
}

export const CampaignImage = ({
  imageAlt = 'img',
  imageUrl = 'https://plus.unsplash.com/premium_photo-1675756583871-6be3905c4ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  className = 'h-[158px] rounded-2xl',
  isLoading = false,
  classNameSkeleton = ''
}: ICampaignImageProps) => {
  const styles = cn(className)
  const [parent] = useAutoAnimate(/* optional config */)

  if (isLoading) {
    return <SkeletonForMedia className={cn(styles, classNameSkeleton)} />
  }

  return (
    <div ref={parent} className={styles}>
      <img src={imageUrl} loading='lazy' alt={imageAlt} className='w-full rounded-2xl h-full object-cover' />
    </div>
  )
}
