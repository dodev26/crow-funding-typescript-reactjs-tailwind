import classNames from "classnames"
import { Link } from "react-router-dom"
interface ILogoProps {
  className?: string
}

export const Logo = ({ className = "inline-block", }: ILogoProps) => {
  return <Link to="/" className={classNames('flex-shrink-0 cursor-pointer', className
  )}><img srcSet="/logo.png 2x" alt="crowfuding logo" className='inline-block' />
  </Link>
}