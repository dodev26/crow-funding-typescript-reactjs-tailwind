import classNames from "classnames";

interface IFormGroupProps {
  children: React.ReactNode;
  className?: string;
}
export const FormGroup = ({ children, className = "mb-2" }: IFormGroupProps) => {
  return <div className={classNames("flex flex-col gap-y-3", className)}>{children}</div>
}