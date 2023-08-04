import { IList } from "./Dropdown"
import { useDropdown } from "./Dropdown.context"

export const List = ({ children }: IList) => {
  const { isOpen } = useDropdown()
  return <>
    {isOpen && (
      <div className="absolute left-0 z-20 w-full dark:bg-darkSoft bg-white dark:text-white rounded-lg shadow-sm top-full max-h-[300px] overflow-y-auto">
        {children}
      </div>
    )}
  </>
}