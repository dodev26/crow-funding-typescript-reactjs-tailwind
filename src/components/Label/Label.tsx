import React from 'react'


interface ILabel extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}
export const Label = ({ children, ...rest }: ILabel) => {
  return (
    <label className='text-sm font-medium text-text2 dark:text-text3 cursor-pointer' {...rest}>{children}</label>
  )
}

