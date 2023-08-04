
import classNames from 'classnames'
import { TextareaHTMLAttributes } from 'react'
import { useController } from 'react-hook-form'
import type { FieldPath, FieldValues } from 'react-hook-form'


interface ITextArea<
  TFieldValues extends FieldValues = FieldValues,
  _TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  control: any
  name: string
  errorField?: string,
}
export const Textarea = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ control, name, errorField = "", ...rest }: ITextArea<TFieldValues, TName>) => {
  const { field } = useController({
    name,
    control,
    defaultValue: ""
  })


  return (
    <div className='input-container-rhf w-full'>
      <div className='relative w-full'>
        <textarea className={classNames('w-full  px-6 py-4 border rounded-xl text-sm font-medium  dark:bg-transparent outline-none resize-none', {
          'border-red-600 placeholder:text-red-600 text-red-600 ': Boolean(errorField),
          'border-strock placeholder:text-text4 dark:border-darkStroke text-text1 dark:text-white min-h-[140px]': !Boolean(errorField),
        })} {...rest} {...field} />
      </div>
      <span className='mt-1 block text-red-600 min-h-[1.25rem] text-xs font-semibold'>{errorField}</span>
    </div>
  )
}

