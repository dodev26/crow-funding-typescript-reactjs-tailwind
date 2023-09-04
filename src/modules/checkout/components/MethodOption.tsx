import { cn } from '~/utils/scripts'

interface IMethodOption {
  img: string
  checked: boolean
  nameMethod?: string
}
const MethodOption = ({ img, checked = false, nameMethod = 'pay method' }: IMethodOption) => {
  return (
    <div
      className={cn(
        'rounded-2xl flex-shrink-0 cursor-pointer flex items-center relative justify-center md:h-[102px] px-2 py-[10px] border  md:w-[132px] w-[100px] h-[76px] transition-all',
        {
          'border-primary': checked
        }
      )}
    >
      <span
        className={cn('absolute invisible transition-transform  top-2 right-2', {
          'text-primary visible': checked
        })}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='md:w-6 md:h-6 w-4 h-4'
        >
          <path
            fillRule='evenodd'
            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
            clipRule='evenodd'
          />
        </svg>
      </span>
      <img src={img} alt={nameMethod} className='md:h-[52px] md:w-[52px] w-10 h-10' />
    </div>
  )
}

export default MethodOption
