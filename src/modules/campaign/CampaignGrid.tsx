import classNames from "classnames";

interface ICampaignGrid {
  children: React.ReactNode,
  type?: string
  styleType?: string,
  className?: string
}

export const CampaignGrid = ({ children, type = "default", styleType, className }: ICampaignGrid) => {
  switch (type) {
    case "secondary":
      styleType = "grid grid-cols-1 gap-y-10"
      break;
    default:
      styleType = "grid md:grid-cols-4 gap-x-7"
      break;
  }
  return type !== "default" ? <div className={classNames(styleType, className)}>{children}</div>
    : <div className={classNames(styleType, className)}>{children}</div>

}