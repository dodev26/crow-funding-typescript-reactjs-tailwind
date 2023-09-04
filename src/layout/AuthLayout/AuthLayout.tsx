import { Outlet } from 'react-router-dom'
import { ButtonTheme } from '~/components/buttonTheme/ButtonTheme'
import Logo from '~/components/logo'
import SelectLanguage from '~/components/selectLanguage'

export const AuthLayout = () => {
  return (
    <div className='w-full min-h-screen bg-transparent p-6 lg:p-10 relative'>
      <div className='flex items-center justify-between mb-5 lg:mb-16'>
        <Logo />
        <div className='flex items-center gap-x-3'>
          <SelectLanguage type='secondary' className='w-[52px] h-[52px]' />
          <ButtonTheme
            showText={false}
            className='mb-0 text-icon-color w-[52px] h-[52px] bg-white shadow-sdprimary dark:bg-darkSoft rounded-lg'
          />
        </div>
      </div>
      <div className='w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto shadow dark:bg-darkSecondary'>
        {<Outlet />}
      </div>
    </div>
  )
}
