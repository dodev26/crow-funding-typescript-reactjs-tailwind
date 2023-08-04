import classNames from "classnames";

interface ICampaignMetaProps {
  amount: number | string;
  text: string;
  className?: string;
  size?: "small" | "big";
}

export const CampaignMeta = ({ amount, text, className, size = "small" }: ICampaignMetaProps) => {
  return <div className={classNames(`flex flex-col items-start gap-y-1  ${className}`)}>
    <h4 className={classNames("font-bold lg:font-semibold  text-text2 dark:text-text4", {
      "text-sm": size === "small",
      "text-base lg:text-xl": size === "big",
    })}>{amount}</h4>
    <span className={classNames(`text-text4`, {
      "text-xs": size === "small",
      "text-sm lg:text-base": size === "big",
    })}>{text}</span>
  </div>
}