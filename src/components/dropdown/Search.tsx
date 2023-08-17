import classNames from 'classnames'
import { ISearch } from './Dropdown'

const Search = ({ placeholder, isLoading, showIcon = true, ...props }: ISearch) => {
  return (
    <div className='sticky top-0 z-10 p-2 bg-white dark:bg-darkSoft'>
      <div className='relative'>
        {showIcon && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 absolute top-2/4 -translate-y-2/4 left-5 -translate-x-2/4 text-text3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        )}
        <input
          type='text'
          placeholder={placeholder}
          className={classNames(
            'w-full dark:bg-transparent dark:border-darkStroke  border border-gray-200 rounded outline-none',
            {
              'pl-10 py-4 pr-10': showIcon,
              'p-4': !showIcon
            }
          )}
          {...props}
        />
        {isLoading && showIcon && (
          <div className='absolute top-2/4 -translate-y-2/4 right-5 translate-x-2/4'>
            <div className='w-4 h-4  rounded-full border-2 border-text3 border-t-transparent animate-spin'></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
