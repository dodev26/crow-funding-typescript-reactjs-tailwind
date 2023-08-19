import { SkeletonForMedia } from '~/components/skeleton/Skeleton'
import { cn } from '~/utils/scripts'

interface ICampaignCarousel {
  className?: string
  classNameSkeleton?: string
  isLoading?: boolean
  onClick?: (url: string) => void
  onMouseEnter?: () => void
  images: string[]
  onMouseLeave?: () => void
}
export const CampaignCarousel: React.FC<ICampaignCarousel> = ({
  className = '',
  classNameSkeleton = '',
  isLoading = false,
  onClick,
  onMouseEnter,
  images = [],
  onMouseLeave
}) => {
  const wrapperStyles = cn(
    'campaign-carousel transition-all w-full relative h-[90px] max-w-full lg:max-w-[416px] mx-auto lg:overflow-x-hidden lg:hover:overflow-x-scroll overflow-x-scroll',
    className
  )
  const containerStyles = cn('flex  w-full h-full absolute justify-start gap-x-4  md:gap-x-5 pb-4 flex-nowrap')
  const imagesStyles = cn(
    'w-[89px] flex-shrink-0 overflow-hidden  rounded-lg border-transparent border-2  h-[70px]   transition-all',
    classNameSkeleton
  )

  if (isLoading) {
    return (
      <SkeletonCarousel
        wrapperStyles={wrapperStyles}
        containerStyles={containerStyles}
        classNameSkeleton={imagesStyles}
      />
    )
  }
  const handleViewImg = (url: string) => {
    onClick && onClick(url)
  }
  return (
    <div className={wrapperStyles}>
      <div className={containerStyles}>
        {images.map((url) => (
          <div
            data-url={url}
            key={url}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={() => handleViewImg(url)}
            className={`bg-white dark:bg-darkSoft ${imagesStyles}`}
          >
            <img
              loading='lazy'
              src={url}
              alt={url}
              className='block w-full h-full max-w-full rounded-lg object-fill  cursor-pointer'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const SkeletonCarousel: React.FC<{
  wrapperStyles: string
  containerStyles: string
  classNameSkeleton: string
}> = ({ wrapperStyles, containerStyles, classNameSkeleton }) => {
  return (
    <div className={wrapperStyles}>
      <div className={containerStyles}>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <SkeletonForMedia key={index} classNameSkeleton={classNameSkeleton} />
          ))}
      </div>
    </div>
  )
}
