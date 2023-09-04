import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { cn } from '~/utils/scripts'

interface INotFound extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
  message?: string
}
const NotFound = ({ className, message = 'Not Found !', ...props }: INotFound) => {
  return (
    <div
      className={cn('w-full h-20 text-xs md:text-sm  flex items-center justify-center text-text4', className)}
      {...props}
    >
      <div className='text-center'>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default NotFound
