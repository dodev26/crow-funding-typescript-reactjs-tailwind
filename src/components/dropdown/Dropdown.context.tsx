import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

interface IDropdownContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  errorField: string | undefined,
  setErrorField?: React.Dispatch<React.SetStateAction<string | undefined>>

}
interface IDropdownProvider {
  children: React.ReactNode,

}
const initialState: IDropdownContext = {
  isOpen: false,
  setIsOpen: () => { },
  errorField: undefined,
  setErrorField: () => { }
}
const DropdownContext = createContext<IDropdownContext>(initialState)

const DropdownProvider = ({ children, ...props }: IDropdownProvider) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen)
  const [errorField, setErrorField] = useState<string | undefined>(initialState.errorField)



  const value = useMemo(() => ({
    isOpen, setIsOpen, errorField,
    setErrorField
  }), [isOpen, errorField])


  return <DropdownContext.Provider value={value} {...props}>
    {children}
  </DropdownContext.Provider>
}

const useDropdown = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error("useDropdown must be used within a DropdownProvider")
  }
  return context
}

export { useDropdown }
export default DropdownProvider