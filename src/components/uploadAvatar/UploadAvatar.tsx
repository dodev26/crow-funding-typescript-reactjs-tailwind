import classNames from "classnames"
import { useMemo, useState } from "react"

interface IUploadAvatar extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  avatarURL?: string
  open?: boolean,
  isLoading?: boolean,
  readonly type?: Readonly<'file'>
}

export const UploadAvatar = ({ className, avatarURL, open = true, isLoading, type = "file", onChange, ...props }: IUploadAvatar) => {
  const lockInput = useMemo(() => open ? false : true, [open])
  const [localValue, setLocalValue] = useState<File | null>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setLocalValue(file)
    }
    onChange && onChange(e)
  }

  return <div className={className}>
    <label htmlFor="avatar" className={classNames("flex  transition-all items-center  justify-center mx-auto w-[100px] h-[100px] md:w-[150px] md:h-[150px]  rounded-full p-1", {
      "cursor-not-allowed bg-gray-200 dark:bg-darkSoft": lockInput,
      "cursor-pointer bg-secondary": !lockInput,
    })}>
      <div className="w-full h-full relative">

        <input id="avatar" type={type} accept='.jpg,.jpeg,.png'
          disabled={lockInput} className="hidden" onChange={onFileChange}  {...props} />
        {isLoading ? <div className="z-50 absolute inset-0 flex items-center justify-center w-full h-full bg-darkSoft/50  rounded-full">
          <div className="w-10 h-10 rounded-full  border-4 border-x-transparent animate-spin"></div>
        </div> : <img src={avatarURL as string} alt="avatar of user" className="block object-cover max-w-full h-auto rounded-full" />}
        <div className={classNames("w-full h-full z-10  transition-all duration-100   rounded-full absolute inset-0 bg-darkSoft/50 flex justify-center items-center", {
          "opacity-0": !open,
          "opacity-100": open && !isLoading,
        })}>
          <span role="button" className="flex z-[-1]   items-center justify-center p-1 rounded-full bg-white dark:bg-darkStroke text-text2 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
          </span>
        </div>
      </div>
    </label>
  </div>

}