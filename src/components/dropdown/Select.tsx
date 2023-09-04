import classNames from 'classnames'
import { ISelect } from './Dropdown'
import { useDropdown } from './Dropdown.context'
import { cn } from '~/utils/scripts'

export const Select = ({ placeholder, className, selected, type = 'primary' }: ISelect) => {
  const { isOpen, setIsOpen, isError } = useDropdown()

  return (
    <div
      className={cn(
        'flex items-center justify-between  bg-white dark:bg-transparent border border-strock dark:border-darkStroke rounded-lg cursor-pointer text-sm text-text4',
        className,
        {
          'py-4 px-6': type === 'primary',
          'h-full p-3': type === 'secondary',
          'border-red-600 placeholder:text-red-600 text-red-600 ': isError
        }
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={classNames('capitalize  font-medium', {
          'text-text1 dark:text-white': Boolean(selected)
        })}
      >
        {selected ? selected : placeholder}
      </span>
      <span>
        {isOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
          </svg>
        )}
      </span>
    </div>
  )
}
