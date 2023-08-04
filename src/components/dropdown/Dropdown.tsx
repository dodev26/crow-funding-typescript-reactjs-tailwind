import DropdownProvider from "./Dropdown.context";
import { List } from "./List";
import Option from "./Option";
import Search from "./Search";
import { Select } from "./Select";

export interface ISelect {
  placeholder: string;
  selected: string;
  className?: string;
}
export interface IList {
  children: React.ReactNode
}
export interface IOption {
  onClick?: () => void
  children: React.ReactNode
}

export interface ISearch extends React.HTMLAttributes<HTMLInputElement> {
  showIcon?: boolean
  isLoading?: boolean
}
interface IDropdownComposition {
  List: React.FC<IList>
  Option: React.FC<IOption>
  Select: React.FC<ISelect>
  Search: React.FC<ISearch>
}

interface IDropdown {
  errorField?: string | undefined
  hideError?: boolean
  children: React.ReactNode,

}
export const Dropdown: React.FC<IDropdown> & IDropdownComposition = ({ errorField, hideError = false, children }) => {





  return <DropdownProvider>
    <div className="relative inline-block w-full">
      {children}
      {!hideError && <div className='mt-1 text-red-600 min-h-[1.25rem] text-xs font-semibold'>{errorField}</div>}
    </div>
  </DropdownProvider>
}

Dropdown.List = List
Dropdown.Select = Select
Dropdown.Option = Option
Dropdown.Search = Search