import React from 'react'
import { cn } from '~/utils/scripts'

interface ILabel extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  className?: string
}
export const Label = ({ children, className, ...rest }: ILabel) => {
  return (
    <label className={cn('text-sm font-medium text-text2 dark:text-text3 cursor-pointer', className)} {...rest}>
      {children}
    </label>
  )
}
