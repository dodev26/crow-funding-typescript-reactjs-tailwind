import { Link } from 'react-router-dom'
import { cn } from '~/utils/scripts'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  isLoading?: boolean
  href?: string
  kind?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'success'
}

export const Button = ({ children, className = 'w-max', isLoading, href, kind, ...rest }: IButton) => {
  const child = !!isLoading ? (
    <div className='w-8 h-8 border-4  border-t-transparent border-b-transparent border-white rounded-full animate-spin absolute'></div>
  ) : (
    children
  )
  let defaultClassname =
    'min-h-[56px] relative  p-4 text-base  font-semibold rounded-xl flex justify-center items-center disabled:bg-gray-400 disabled:opacity-50'

  switch (kind) {
    case 'primary':
      defaultClassname = `${defaultClassname} bg-primary text-white`
      break
    case 'secondary':
      defaultClassname = `${defaultClassname} bg-secondary text-white`
      break
    case 'tertiary':
      defaultClassname = `${defaultClassname} bg-secondary/10 text-secondary`
      break
    case 'danger':
      defaultClassname = `${defaultClassname} bg-error text-white`
      break
    default:
      defaultClassname = `${defaultClassname} border-primary border text-primary`
      break
  }

  if (href) {
    return (
      <Link className={cn(defaultClassname, className)} to={href}>
        {children}
      </Link>
    )
  }
  return (
    <button className={cn(defaultClassname, className)} {...rest}>
      {child}
    </button>
  )
}
