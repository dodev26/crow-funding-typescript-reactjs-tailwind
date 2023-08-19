import classNames from 'classnames'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { cn } from '~/utils/scripts'
import { ControllImage } from './parts'
import PreviewImage from './parts/PreviewImage'

interface IImageUpload extends React.InputHTMLAttributes<HTMLInputElement> {
  errorField?: string | undefined
  hideError?: boolean
  reset?: () => void
}

const ImageUpload = ({ errorField, hideError, reset, multiple = false, ...props }: IImageUpload) => {
  const [image, setImage] = useState<string[]>([])
  const [parent] = useAutoAnimate()
  const [_, setLocalValue] = useState<FileList | null>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files
    if (file && (file.length > 6 || (image.length > 0 && image.length + file?.length > 6)))
      return alert('You can not upload more than 6 images')
    else if (file && file.length > 0) {
      setLocalValue(file)
      const imageUrls = Array.from(file).map((file) => URL.createObjectURL(file))
      setImage((prev) => [...prev, ...imageUrls])
      props.onChange?.(e)
    }
  }

  // const handleReset = () => {
  //   setImage('')
  //   setLocalValue(null)
  //   reset?.()
  // }

  return (
    <div className='w-full relative'>
      <div
        className={cn('rounded-xl flex items-center justify-center border  w-full  min-h-[250px]', {
          'border-dashed': image.length === 0,
          'border-strock dark:border-darkStroke': !errorField,
          'border-red-600': !!errorField
        })}
      >
        {image && image.length > 0 ? (
          <div
            ref={parent}
            className={classNames('w-full h-full relative', {
              'flex items-start sm:justify-start p-4 flex-wrap gap-4': multiple
            })}
          >
            {image.map((url) => (
              <PreviewImage key={url} url={url} onDelete={() => {}} onPreview={() => null} />
            ))}
            {image && image.length < 6 && (
              <ControllImage
                errorField={errorField}
                className='w-full flex-shrink-0 h-40 sm:w-[calc(50%-8px)] border-2 border-dashed border-strock dark:border-darkStroke  lg:w-[calc(33.333%-11px)]   rounded-xl overflow-hidden relative group flex items-center justify-center'
                onChange={onFileChange}
              />
            )}
          </div>
        ) : (
          <ControllImage errorField={errorField} onChange={onFileChange} />
        )}
      </div>
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-xs font-semibold max-w-full break-words'>{errorField}</div>
    </div>
  )
}
export default ImageUpload

{
  /* <img src={image} loading="lazy" className="absolute inset-0 max-w-full w-full h-full object-scale-down   dark:border-darkStroke border-dashed border-gray-200 rounded-xl" /> */
}
{
  /* <button onClick={handleReset} type="button" className="w-8 h-8 rounded-full bg-white border border-strock dark:border-darkStroke shadow text-error dark:bg-darkStroke flex items-center justify-center absolute right-[-10px] top-[-10px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button> */
}
