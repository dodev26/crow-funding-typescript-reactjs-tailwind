import { Link } from 'react-router-dom'
import { Paypal } from '~/assets'
import Button from '~/components/button'
import { Heading } from '~/components/heading/Heading'
import IconWallet from '~/components/icons/IconWallet'

const WithDrawCard = () => {
  return (
    <div className='bg-white   pt-[40px] px-5 pb-6  min-h-[50vh]  dark:bg-darkSecondary w-full rounded-[10px] overflow-hidden z-0'>
      <div className='w-full  h-[263px] relative'>
        <div className='w-[232px] h-[232px]  flex-shrink-0 absolute bg-[#7EF54D] blur-[75px] top-0 left-0 -translate-x-2/4 -translate-y-3/4'></div>
        <div className='w-[232px] h-[232px]  flex-shrink-0 absolute bg-[#E7F561] blur-[75px] top-0 left-2/4 -translate-x-2/4 -translate-y-3/4'></div>
        <div className='w-[232px] h-[232px]  flex-shrink-0 absolute bg-[#92EBFF] blur-[75px] top-0 right-0 translate-x-2/4 -translate-y-3/4'></div>
        <div className='text-text2 dark:text-white max-w-[167px] w-full mx-auto flex flex-col items-center gap-y-[15px] z-[1] relative'>
          <div className='w-20 mx-auto h-20 flex items-center justify-center rounded-full bg-[#DBFCD0] backdrop-blur-[100px]'>
            <IconWallet />
          </div>
          <span className='inline-block  font-medium text-sm'>Your Balance</span>
          <p className='flex-shrink-0 text-text1  dark:text-white font-bold text-[40px]'>1,206.89</p>
          <span className='inline-block  font-medium text-sm'>USD</span>
        </div>
        <Button
          className='capitalize text-base font-semibold py-[13px] flex items-center gap-x-[10px]  min-h-[52px] mx-auto mt-5 w-full max-w-[231px]'
          kind='primary'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
            />
          </svg>
          withdraw
        </Button>
      </div>
      <div>
        <div className='font-semibold capitalize mt-[60px] flex justify-between'>
          <Heading className='text-xl text-text1 dark:text-white' as='h2'>
            activity
          </Heading>
          <Link to='/' className='text-secondary text-base'>
            view all
          </Link>
        </div>
        <div className='flex flex-col items-start mt-[18px]'>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <WithDrawActivity key={i} />
            ))}
        </div>
      </div>
    </div>
  )
}

const WithDrawActivity = () => {
  return (
    <div className='py-3 flex w-full items-center justify-start  gap-x-5'>
      <div className='h-[58px] rounded-[10px] bg-[#8C6DFD] bg-opacity-5 w-[58px] flex items-center justify-center flex-shrink-0'>
        <img src={Paypal} className='w-[30px] h-[30px] block object-cover' alt='' />
      </div>
      <div className='flex-1 text-base font-medium  w-full flex items-center justify-between gap-x-[34px]'>
        <div className='w-full max-w-[183px]'>
          <h2 className='dark:text-white text-text1'>Payoneer Withdraw</h2>
          <span className='text-text4 dark:text-text3'>15 Aug, 08:00am</span>
        </div>
        <div className='text-error'>$200.00</div>
      </div>
    </div>
  )
}

export default WithDrawCard
