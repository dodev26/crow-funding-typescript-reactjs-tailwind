import { useDropdown } from "./Dropdown.context";
import { IOption } from "./Dropdown";


const Option = ({ children, onClick }: IOption) => {

  const { setIsOpen } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setIsOpen(false);
  };
  return (
    <div
      className="py-4 px-5 cursor-pointer flex items-center justify-between hover:text-primary transition-all text-sm"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Option;