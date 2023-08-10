import classNames from "classnames"
import { useState } from "react"
import { IconView } from "../icons/IconView/IconView"
import IconClose from "../icons/IconClose"
import { motion } from 'framer-motion'

interface IImageUpload extends React.InputHTMLAttributes<HTMLInputElement> {
  errorField?: string | undefined
  hideError?: boolean
  reset?: () => void
}

const ImageUpload = ({ errorField, hideError, reset, multiple = false, ...props }: IImageUpload) => {
  const [image, setImage] = useState('')
  const [localValue, setLocalValue] = useState<File | null>(null)
  console.log("🚀 ~ file: index.tsx ~ line 16 ~ ImageUpload ~ localValue", localValue)
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setLocalValue(file)
      setImage(URL.createObjectURL(file))
      props.onChange?.(e)
    }
  }
  // const handleReset = () => {
  //   setImage('')
  //   setLocalValue(null)
  //   reset?.()
  // }


  return (
    <div className="w-full relative">
      <div className={classNames("rounded-xl flex items-center justify-center  w-full border min-h-[250px]", {
        "border-dashed": !image,
        "border": !!image,
        'border-strock dark:border-darkStroke': !errorField,
        'border-red-600': !!errorField
      })}>
        {image ? <div className={classNames("w-full h-full relative", {
          "flex items-start sm:justify-start p-4 flex-wrap gap-4": multiple
        })}>
          {multiple ?
            Array(5).fill(0).map((_, index) => (<div
              key={index} className="w-full flex-shrink-0 h-40 sm:w-[calc(50%-8px)]  lg:w-[calc(33.333%-11px)]   rounded-xl overflow-hidden relative group">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 w-full  h-full text-white bg-gray-700/70 rounded-xl group-hover:flex hidden items-center justify-center gap-x-6">
                <motion.button whileTap={{
                  scale: 0.7
                }} type="button" className="cursor-pointer">
                  <IconView className="h-8 w-8" />
                </motion.button>
                <motion.button whileTap={{
                  scale: 0.7
                }} type="button" className="cursor-pointer">
                  <IconClose className="h-8 w-8" />
                </motion.button>
              </motion.div>
              <img src={image} loading="lazy" className="max-w-full w-full h-full object-scale-down   dark:border-darkStroke border-dashed border-gray-200 rounded-xl" />
            </div>)) : <div className="w-full flex-shrink-0 h-full rounded-xl overflow-hidden relative group">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 w-full  h-full text-white bg-gray-700/70 rounded-xl group-hover:flex hidden items-center justify-center gap-x-6">
                <motion.button whileTap={{
                  scale: 0.7
                }} type="button" className="cursor-pointer">
                  <IconView className="h-8 w-8" />
                </motion.button>
                <motion.button whileTap={{
                  scale: 0.7
                }} type="button" className="cursor-pointer">
                  <IconClose className="h-8 w-8" />
                </motion.button>
              </motion.div>
              <img src={image} loading="lazy" className="max-w-full w-full h-full object-scale-down   dark:border-darkStroke border-dashed border-gray-200 rounded-xl" />
            </div>
          }
        </div> : <label htmlFor="image-upload" className="flex items-center justify-center h-full w-full cursor-pointer">
          <input id="image-upload" type="file" accept="image/*" className="hidden" multiple={multiple}  {...props} onChange={onFileChange} />
          <div className={classNames("flex flex-col  gap-y-4 items-center w-full max-w-[100px]", {
            "text-text3": !errorField,
            "text-red-600": !!errorField
          })}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <p className="text-xs font-medium ">Upload Image</p>
          </div>
        </label>}
      </div>
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-xs font-semibold max-w-full break-words'>{errorField}</div>
    </div>
  )
}
export default ImageUpload

{/* <img src={image} loading="lazy" className="absolute inset-0 max-w-full w-full h-full object-scale-down   dark:border-darkStroke border-dashed border-gray-200 rounded-xl" /> */ }
{/* <button onClick={handleReset} type="button" className="w-8 h-8 rounded-full bg-white border border-strock dark:border-darkStroke shadow text-error dark:bg-darkStroke flex items-center justify-center absolute right-[-10px] top-[-10px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button> */}