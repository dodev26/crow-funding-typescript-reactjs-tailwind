import { Link } from 'react-router-dom'
import IconFolder from '~/components/icons/IconFolder'
import Skeleton from '~/components/skeleton'
import { cn } from '~/utils/scripts'

interface ICampaignCategoryProps {
  pathCategory: string
  nameCategory: string
  isLoading?: boolean
  className?: string
  classNameSkeleton?: string
}
export const CampaignCategory = ({
  isLoading = false,
  nameCategory,
  pathCategory,
  className = 'text-xs',
  classNameSkeleton
}: ICampaignCategoryProps) => {
  const styles = cn('flex items-baseline gap-x-3 mb-4  font-medium text-text3 ', className)

  if (isLoading) {
    return <Skeleton className={cn(styles, classNameSkeleton)} />
  }
  return (
    <Link to={pathCategory} className={styles}>
      <IconFolder />
      <span>{nameCategory}</span>
    </Link>
  )
}
