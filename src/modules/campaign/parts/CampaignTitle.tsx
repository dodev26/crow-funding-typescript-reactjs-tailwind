import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Skeleton from '~/components/skeleton'
import { cn } from '~/utils/scripts'

interface ICampaignTitle extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
  href?: string
  isLoading?: boolean
  classNameSkeleton?: string
}
export const CampaignTitle = ({
  isLoading = false,
  children,
  classNameSkeleton,
  href,
  className = 'mb-1 font-semibold',
  ...props
}: ICampaignTitle) => {
  const styles = cn('text-text1 dark:text-white transition-all', className, {
    'cursor-pointer  hover:text-primary dark:hover:text-primary': !!href
  })
  if (isLoading) {
    return <Skeleton className={cn(styles, classNameSkeleton)} />
  }
  if (href) {
    return (
      <Link to={href} className={styles}>
        {children}
      </Link>
    )
  }
  return (
    <h3 className={styles} {...props}>
      {children}
    </h3>
  )
}
