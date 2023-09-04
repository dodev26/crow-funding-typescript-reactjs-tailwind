import { createPortal } from 'react-dom'

interface IModalPortal {
  children: React.ReactNode
  wrapperId?: string
}
const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

const ModalPortal: React.FC<IModalPortal> = ({ children, wrapperId = 'modal-portal-wrapper' }) => {
  let element = document.getElementById(wrapperId)
  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId)
  }
  return createPortal(children, element)
}

export default ModalPortal
