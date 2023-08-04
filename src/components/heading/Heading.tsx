import classNames from "classnames"
import React from "react"



interface IHeading extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  number?: number,
  className?: string
}
export const Heading: React.FC<IHeading> = ({
  children, as = "h1", number, className = "mb-5 text-lg font-semibold", ...rest
}) => {
  const child = number ? <>{children} <span className="inline-block ml-1 text-secondary">{`(${number})`}</span> </> : children
  return React.createElement(as, {
    className: classNames(`text-text1  dark:text-white`, className, {
      "flex items-center": number
    }),
    ...rest,

  }, child)
}