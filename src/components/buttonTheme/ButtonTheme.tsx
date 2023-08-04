import useTheme from "~/hooks/useTheme"
import IconLight from "../icons/IconLight"
import classNames from "classnames"
import { IconDark } from "../icons/IconDark/IconDark"

interface IButtonThemeProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  showText?: boolean
}
export const ButtonTheme = ({ className = "rounded-lg", showText = true, ...props }: IButtonThemeProps) => {
  const { changeTheme, theme } = useTheme()
  return <button type="button" onClick={() => changeTheme(
    theme === 'dark' ? 'light' : 'dark'
  )} className={classNames('btn-switch-theme flex justify-center items-center', className, {
    'gap-x-5': showText
  })}
    {...props}
  >
    <span>{theme === "dark" ? <IconDark /> : <IconLight />}</span>
    {showText && <span className="md:hidden">Dark mode</span>}
  </button>
}