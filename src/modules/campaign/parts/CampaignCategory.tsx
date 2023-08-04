import { Link } from "react-router-dom"
import IconFolder from "~/components/icons/IconFolder"

interface ICampaignCategoryProps {
  pathCategory: string,
  nameCategory: string,
  className?: string
}
export const CampaignCategory = ({ nameCategory, pathCategory, className = "text-xs" }: ICampaignCategoryProps) => {
  return <Link to={pathCategory} className={`flex items-baseline gap-x-3 mb-4  font-medium text-text3 ${className}`}>
    <IconFolder />
    <span>{nameCategory}</span>
  </Link>
}