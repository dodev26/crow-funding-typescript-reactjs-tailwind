import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

interface IDropdownContext {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isError: boolean
  setIsError?: React.Dispatch<React.SetStateAction<boolean>>
}
interface IDropdownProvider {
  children: React.ReactNode
  errorStatus?: boolean
}
const initialState: IDropdownContext = {
  isOpen: false,
  setIsOpen: () => {},
  isError: false,
  setIsError: () => {}
}
const DropdownContext = createContext<IDropdownContext>(initialState)

const DropdownProvider = ({ children, ...props }: IDropdownProvider) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen)
  const [isError, setIsError] = useState<boolean>(initialState.isError)
  const { errorStatus } = props

  useEffect(() => {
    if (typeof errorStatus === 'boolean') {
      setIsError(errorStatus)
    }
  }, [errorStatus])

  const value = useMemo(() => {
    return {
      isOpen,
      setIsOpen,
      isError,
      setIsError
    }
  }, [isOpen, isError])

  return (
    <DropdownContext.Provider value={value} {...props}>
      {children}
    </DropdownContext.Provider>
  )
}

const useDropdown = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider')
  }
  return context
}

export { useDropdown }
export default DropdownProvider
