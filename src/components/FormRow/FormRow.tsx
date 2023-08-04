import classNames from "classnames";

interface IFormRowProps {
  children: React.ReactNode;
  className?: string
}

export const FormRow = ({ children, className = 'gap-x-[45px]' }: IFormRowProps) => {
  return <div className={classNames("grid grid-cols-2", className)}>{children}</div>
}