import classNames from 'classnames'
import { useRef, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { cn } from '~/utils/scripts'
import { ControllImage } from './parts'
import PreviewImage from './parts/PreviewImage'
import { toast } from 'react-toastify'
import { v4 } from 'uuid'

interface IImageUpload extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  errorField?: string | undefined
  hideError?: boolean
  onChange?: (files: File[]) => void
  reset?: () => void
  value?: string[]
}
interface FileListCustom {
  id: string
  file: File
}

const ImageUpload = ({ errorField, onChange, multiple = false }: IImageUpload) => {
  const [imageURL, setImageURL] = useState<
    {
      id: string
      url: string
    }[]
  >([])
  const [parent] = useAutoAnimate()
  const [localValue, setLocalValue] = useState<FileListCustom[] | string[]>([])
  const fileControlRef = useRef<HTMLInputElement>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (files && (files.length > 6 || (imageURL.length > 0 && imageURL.length + files?.length > 6))) {
      fileControlRef.current && fileControlRef.current.value && (fileControlRef.current.value = '')
      return toast.error('You can not upload more than 6 images')
    } else if (files && files.length > 0) {
      const fileListId = Array.from(files).map((file) => ({
        id: v4(),
        file
      })) as FileListCustom[]
      const filesToArray = [...localValue, ...fileListId] as FileListCustom[]
      setLocalValue(filesToArray)
      const imageUrls = Array.from(fileListId).map((file) => ({
        id: file.id,
        url: URL.createObjectURL(file.file)
      }))
      setImageURL((prev) => [...prev, ...imageUrls])
      onChange && onChange(filesToArray.map((file) => file.file))
    }
  }

  const handleRemoveImage = (id: string) => {
    const removeById = <
      T extends {
        id: string
        [key: string]: any
      }
    >(
      arr: T[]
    ) => arr.filter((item: T) => item.id !== id)
    onChange &&
      onChange(
        removeById(localValue as FileListCustom[])
          .filter((file) => id !== file.id)
          .map((file) => file.file)
      )
    setImageURL(removeById)
    setLocalValue(removeById as unknown as FileListCustom[])
  }

  return (
    <div className='w-full relative'>
      <div
        className={cn('rounded-xl flex items-center justify-center border  w-full  min-h-[250px]', {
          'border-dashed': imageURL.length === 0,
          'border-strock dark:border-darkStroke': !errorField,
          'border-red-600': !!errorField
        })}
      >
        <div
          ref={parent}
          className={classNames('w-full h-full relative', {
            'flex items-start sm:justify-start p-4 flex-wrap gap-4': multiple
          })}
        >
          {imageURL.map((img) => (
            <PreviewImage
              key={img.id}
              url={img.url}
              onDelete={() => handleRemoveImage(img.id)}
              onPreview={() => null}
            />
          ))}
          {imageURL.length < 6 && (
            <ControllImage
              errorField={errorField}
              className='w-full flex-shrink-0 h-40 sm:w-[calc(50%-8px)] border-2 border-dashed border-strock dark:border-darkStroke  lg:w-[calc(33.333%-11px)]   rounded-xl overflow-hidden relative group flex items-center justify-center'
              onChange={onFileChange}
              ref={fileControlRef}
            />
          )}
        </div>
      </div>
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-xs font-semibold max-w-full break-words'>{errorField}</div>
    </div>
  )
}
export default ImageUpload
