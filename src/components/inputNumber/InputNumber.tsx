import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react'
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
  type?: Readonly<'number'>,
  errorField?: string,
  classInputWrapper?: string,
  hideError?: boolean,
  showArrow?: boolean
}
export const InputNumber = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ control, name, type = "number", errorField = "", classInputWrapper, hideError = false, showArrow = false, ...rest }: IInput<TFieldValues, TName>) => {
  const { field } = useController({
    name,
    control,
    defaultValue: ""
  })
  return (
    <div className={classNames(`input-container-rhf w-full`, classInputWrapper)}>
      <div className='relative w-full'>
        <input type={type} className={classnames('w-full dark:disabled:bg-darkSoft  px-6 py-4 border rounded-xl text-sm font-medium  dark:bg-transparent disabled:bg-gray-200', {
          'border-red-600 placeholder:text-red-600 text-red-600 ': Boolean(errorField),
          'border-strock placeholder:text-text4 dark:border-darkStroke text-text1 dark:text-white': !Boolean(errorField),
          'show-arrow': !showArrow
        })} {...rest} {...field} />
      </div>
      {!hideError && <div className='mt-1 text-red-600 min-h-[1.25rem] text-xs font-semibold max-w-full break-words'>{errorField}</div>}
    </div>
  )
}

