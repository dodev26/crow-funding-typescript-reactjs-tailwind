
import { Link } from 'react-router-dom'
import Button from '~/components/button'
import Logo from '~/components/logo'
import { PATH } from '~/constants'
import { auth } from '~/firebase/initialize'
import { useAppSelector } from '~/hooks/hooks'
import DashboardSearch from '~/modules/dashboard/DashboardSearch'
import DashboartFund from '~/modules/dashboard/DashboartFund'
import { RootState } from '~/store/configureStore'



const DashboartTopbar = () => {
  const { user } = useAppSelector((state: RootState) => state.auth)

  return (
    <div className='flex items-center'>
      <div className="flex items-center lg:flex-1 gap-x-10">
        <Logo />
        <div className="w-full max-w-[458px] hidden lg:block">
          <DashboardSearch />
        </div>
      </div>
      <div className="flex items-center flex-1 gap-x-10 justify-end">
        <DashboartFund className='hidden' />
        <Button href={PATH.campaign_start} type='button' kind='secondary'>Start a campaign</Button>
        <img loading='lazy' src={user?.photoURL as string} alt="avatar" className="avatar flex-shrink-0 w-10 h-10 lg:w-[52px] lg:h-[52px] object-cover rounded-full" />
      </div>
    </div>
  )
}

export {
  DashboartTopbar
}