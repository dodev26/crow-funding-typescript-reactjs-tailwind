export const CampaignDesc = ({ children, className = "mb-4 text-sm" }: {
  children: React.ReactNode,
  className?: string
}) => {
  return <p className={`font-normal text-text3 line-clamp-2 ${className}`}>{children}</p>
}