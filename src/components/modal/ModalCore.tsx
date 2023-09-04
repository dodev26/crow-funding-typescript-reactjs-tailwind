import { useModal } from '~/contexts/modal.context'
import IconClose from '../icons/IconClose'

interface IModalCore {
  children: React.ReactNode
}
const ModalCore = ({ children }: IModalCore) => {
  const { closeModal } = useModal()
  return (
    <div className='modal-container z-[9999] bg-black/60 w-full  p-6 h-full inset-0 fixed flex items-center justify-center'>
      <div onClick={closeModal} className='modal-overlay w-full h-full absolute inset-0' />
      <div className='modal-content pt-[50px] rounded-xl dark:bg-darkSecondary bg-white border border-strock dark:border-none w-full sm:w-max flex items-center relative justify-center'>
        <div className='top-0 px-3  bg-transparent left-0 right-0 absolute h-[50px] flex items-center justify-end'>
          <button
            onClick={closeModal}
            className='text-error cursor-pointer flex items-center justify-center   w-[30px] h-[30px] rounded-full bg-error bg-opacity-10'
          >
            <IconClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
export default ModalCore
