import IconClose from '~/components/icons/IconClose'
import { IconView } from '~/components/icons/IconView/IconView'
import { cn } from '~/utils/scripts'
interface IPreviewImage {
  url: string
  onDelete: () => void
  onPreview: () => void
  className?: string
}
const PreviewImage = ({ onDelete, onPreview, url, className }: IPreviewImage) => {
  return (
    <div
      className={cn(
        'w-full flex-shrink-0 h-40 sm:w-[calc(50%-8px)]  lg:w-[calc(33.333%-11px)]   rounded-xl overflow-hidden relative group',
        className
      )}
    >
      <div className='absolute inset-0 w-full  h-full text-white bg-gray-300/50 dark:bg-gray-700/70 rounded-xl group-hover:flex hidden items-center justify-center gap-x-6'>
        <button type='button' className='cursor-pointer'>
          <IconView className='h-8 w-8' />
        </button>
        <button type='button' className='cursor-pointer'>
          <IconClose className='h-8 w-8' />
        </button>
      </div>
      <img
        src={url}
        loading='lazy'
        className='max-w-full w-full h-full object-scale-down   dark:border-darkStroke border-dashed border-gray-200 rounded-xl'
      />
    </div>
  )
}

export default PreviewImage
