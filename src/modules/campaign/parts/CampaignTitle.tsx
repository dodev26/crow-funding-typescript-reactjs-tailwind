import classNames from "classnames"

export const CampaignTitle = ({ children, className = "mb-1 font-semibold" }: {
  children: React.ReactNode,
  className?: string
}) => {
  return <h3 className={classNames("text-text1 dark:text-white", className)}>{children}</h3>
}