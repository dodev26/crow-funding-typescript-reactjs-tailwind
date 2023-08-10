import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import { useController } from 'react-hook-form'
import type { FieldPath, FieldValues } from 'react-hook-form'
import classnames from "classnames"
import { EyeViewToggle } from '../icons/EyeViewToggle/EyeViewToggle'
import useToggle from '~/hooks/useToggle'
import classNames from 'classnames'



interface IInput<
  TFieldValues extends FieldValues = FieldValues,
  _TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends InputHTMLAttributes<HTMLInputElement> {
  control: any
  name: string
  type: HTMLInputTypeAttribute,
  errorField?: string,
  classInputWrapper?: string,
  className?: string,
  hideError?: boolean,
}
const Input = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ control, name, type, errorField = "", classInputWrapper, hideError = false, className, ...props }: IInput<TFieldValues, TName>) => {
  const { field } = useController({
    name,
    control,
  })

  const [isShowPassword, toggleShowPassword] = useToggle(false)
  const typeInput = isShowPassword ? "text" : type
  return (
    <div className={classNames(`input-container-rhf w-full`, classInputWrapper)}>
      <div className='relative w-full'>
        <input type={typeInput} className={classnames(`w-full  px-6 py-4 border rounded-xl text-sm font-medium  dark:bg-transparent disabled:bg-gray-200 dark:disabled:bg-darkSoft ${className}`, {
          'border-red-600 placeholder:text-red-600 text-red-600 ': Boolean(errorField),
          'border-strock placeholder:text-text4 dark:border-darkStroke text-text1 dark:text-white': !Boolean(errorField),
          'pr-16': type === "password",

        })} {...props} {...field} />
        {type === "password" && <EyeViewToggle
          onToggle={toggleShowPassword}
          className='absolute top-2/4 -translate-y-2/4 right-6'
          isOpen={isShowPassword} />}
      </div>
      {!hideError && <div className='mt-1 text-red-600 min-h-[1.25rem] text-xs font-semibold max-w-full break-words'>{errorField}</div>}
    </div>
  )
}

export default Input