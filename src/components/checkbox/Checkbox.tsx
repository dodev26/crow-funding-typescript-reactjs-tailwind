import classNames from "classnames"
import { useEffect } from "react"
import { useController } from "react-hook-form"
import type { FieldValues } from 'react-hook-form'
import useToggle from "~/hooks/useToggle"

interface ICheckBox<TFieldValues extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string,
  id: string,
  control: any,
  errorField?: string

}

export const Checkbox = <TFieldValues extends FieldValues = FieldValues>({ name, errorField, control, id, ...props }: ICheckBox<TFieldValues>) => {
  const { field } = useController({
    name,
    control,
  })

  const [isChecked, toggleCheckBox] = useToggle(false)

  useEffect(() => {
    if (!field.value) {
      toggleCheckBox(false)
    }
  }, [field.value])


  return <label htmlFor={name} className={classNames(`inline-block cursor-pointer border flex-shrink-0  w-5 h-5 rounded text-white`, {
    'bg-primary border-primary': isChecked,
    'border-red-600': !!errorField,
    'border-strock dark:border-darkStroke': !errorField,
  })}>
    <input type="checkbox" checked={isChecked} className="hidden" id={id} {...props}  {...field} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      field.onChange(e)
      toggleCheckBox()
    }} />
    {isChecked && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>}
  </label>
}