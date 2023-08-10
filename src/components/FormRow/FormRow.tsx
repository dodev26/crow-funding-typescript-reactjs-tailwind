import classNames from "classnames";
import { colTailwind } from "~/types/col";

interface IFormRowProps {
  children: React.ReactNode;
  className?: string
  xs?: colTailwind
  sm?: colTailwind
  md?: colTailwind
  lg?: colTailwind
  xl?: colTailwind
  xxl?: colTailwind
}

export const FormRow = ({ children, className = 'gap-x-[45px]', xs = 2, lg, md, sm, xl, xxl }: IFormRowProps) => {


  return <div className={classNames("grid", className, {
    [`xs:grid-cols-${xs}`]: xs,
    [`sm:grid-cols-${sm}`]: sm,
    [`md:grid-cols-${md}`]: md,
    [`lg:grid-cols-${lg}`]: lg,
    [`xl:grid-cols-${xl}`]: xl,
    [`2xl:grid-cols-${xxl}`]: xxl,
  })}>{children}</div>
}