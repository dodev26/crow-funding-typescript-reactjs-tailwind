import { cn } from '~/utils/scripts'
import { SkeletonForMedia } from '../skeleton/Skeleton'

interface IAvatar {
  isLoading?: boolean
  className?: string
  classNameSkeleton?: string
  src: string
  alt: string
}
const Avatar: React.FC<IAvatar> = ({ className, classNameSkeleton, isLoading, src, alt }) => {
  const styles = cn('rounded-full w-[52px] h-[52px]', className)
  if (isLoading) {
    return <SkeletonForMedia className={styles} classNameSkeleton={classNameSkeleton} />
  }
  return (
    <div role='img' className={styles}>
      <div className='flex w-full h-full items-center justify-center'>
        <img className='w-full h-full rounded-full object-cover' src={src} alt={alt} />
      </div>
    </div>
  )
}

export default Avatar
