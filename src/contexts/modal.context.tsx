import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ModalCore, ModalPortal } from '~/components/modal'
interface IModalContext {
  modals: React.ReactNode[]
  openModal: (modal: React.ReactNode) => void
  closeModal: () => void
  destroyAllModal: () => void
  isLoading?: boolean
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState: IModalContext = {
  modals: [],
  openModal: () => {},
  closeModal: () => {},
  destroyAllModal: () => {},
  isLoading: false,
  setIsLoading: () => {}
}

const push = (item: React.ReactNode) => (array: React.ReactNode[]) => [...array, item]

const pop = (array: React.ReactNode[]) => (array && array.length > 0 ? array.slice(0, array.length - 1) : [])

const ModalContext = createContext(initialState)

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modals, setModals] = useState<React.ReactNode[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const openModal = (modal: React.ReactNode) => {
    setModals(push(modal))
  }

  const closeModal = () => {
    setModals(pop)
  }

  const destroyAllModal = () => {
    setModals([])
  }

  const value = {
    modals,
    openModal,
    closeModal,
    destroyAllModal,
    isLoading,
    setIsLoading
  }

  const CurrentModals = useMemo(() => modals[modals.length - 1], [modals])

  useEffect(() => {
    if (!!modals.length) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modals])

  return (
    <ModalContext.Provider value={value}>
      {children}
      {!!modals?.length && (
        <ModalPortal>
          <ModalCore>{CurrentModals}</ModalCore>
        </ModalPortal>
      )}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

export default ModalProvider
