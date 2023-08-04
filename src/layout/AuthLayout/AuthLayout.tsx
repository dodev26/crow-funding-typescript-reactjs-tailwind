
import { Link, Outlet } from 'react-router-dom'
import { ButtonTheme } from '~/components/buttonTheme/ButtonTheme'
import Logo from '~/components/logo'



export const AuthLayout = () => {
  return (
    <div className='w-full min-h-screen bg-lite dark:bg-darkbg p-6 lg:p-10 relative'>
      <img src="/eclipse.png" alt="eclipse" className='pointer-events-none absolute bottom-0 left-0 right-0 z-[-1] isolate' />
      <div className='flex items-center justify-between mb-5 lg:mb-16'>
        <Logo />
        <ButtonTheme showText={false} className='mb-0 text-icon-color w-[52px] h-[52px] bg-white shadow-sdprimary dark:bg-darkSoft rounded-lg' />
      </div>
      <div className='w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto shadow dark:bg-darkSecondary'>
        {<Outlet />}
      </div>
    </div>
  )
}

