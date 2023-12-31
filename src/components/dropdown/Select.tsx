import classNames from "classnames"
import { ISelect } from "./Dropdown"
import { useDropdown } from "./Dropdown.context"

export const Select = ({ placeholder, className, selected }: ISelect) => {
  const { isOpen, setIsOpen } = useDropdown()
  return <div
    className={classNames("flex items-center justify-between py-4 px-6 bg-white dark:bg-transparent border border-strock dark:border-darkStroke rounded-lg cursor-pointer text-sm text-text4", className)}
    onClick={() => setIsOpen(!isOpen)}
  >
    <span className={classNames("capitalize  font-medium", {
      'text-text1 dark:text-white': Boolean(selected),
    })}>{selected ?
      selected : placeholder
      }</span>
    <span>
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </span>
  </div>
}