import { cn } from '~/utils/scripts'

interface IControllImages extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'multiple'> {
  errorField?: string | undefined
  hideError?: boolean
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const ControllImage: React.FC<IControllImages> = ({ errorField, hideError = false, className, onChange, ...props }) => {
  console.log('className', className)
  return (
    <div className={cn(className)}>
      <label htmlFor='image-upload' className='flex items-center justify-center h-full w-full cursor-pointer'>
        <input
          id='image-upload'
          type='file'
          accept='image/*'
          className='hidden'
          onChange={onChange}
          multiple
          {...props}
        />
        <div
          className={cn('flex flex-col  gap-y-4 items-center w-full max-w-[100px]', {
            'text-text3': !errorField,
            'text-red-600': !!errorField
          })}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
            />
          </svg>
          <p className='text-xs font-medium '>Upload Image</p>
        </div>
      </label>
    </div>
  )
}
export default ControllImage
