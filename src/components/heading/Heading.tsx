import React from 'react'
import Skeleton from '../skeleton'
import { cn } from '~/utils/scripts'

interface IHeading extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  number?: number
  className?: string
  isLoading?: boolean
}
export const Heading: React.FC<IHeading> = ({
  children,
  as = 'h1',
  number = 0,
  className = 'mb-5 text-lg font-semibold',
  isLoading,
  ...rest
}) => {
  const styles = cn(className)
  const child = number ? (
    <>
      {children} <span className='inline-block ml-1 text-secondary'>{`(${number})`}</span>{' '}
    </>
  ) : (
    children
  )

  if (isLoading) {
    return <Skeleton className={cn(styles, 'w-[150px] h-[28px]')} />
  }
  return React.createElement(
    as,
    {
      className: cn(`text-text1  dark:text-white`, styles, {
        'flex items-center': number
      }),
      ...rest
    },
    child
  )
}
