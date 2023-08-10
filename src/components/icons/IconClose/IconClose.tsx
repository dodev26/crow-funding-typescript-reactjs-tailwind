import classNames from "classnames"

interface IIconClose extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export const IconClose = ({
  className = "w-6 h-6",
  ...props
}: IIconClose) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classNames(className)} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>

}