import classNames from 'classnames'
import { useMemo } from 'react'
import { colTailwind } from '~/types/col'
import { cn } from '~/utils/scripts'

interface IFormRowProps {
  children: React.ReactNode
  className?: string
}

export const FormRow = ({ children, className }: IFormRowProps) => {
  return <div className={cn('grid gap-x-[45px] grid-cols-2', className)}>{children}</div>
}
