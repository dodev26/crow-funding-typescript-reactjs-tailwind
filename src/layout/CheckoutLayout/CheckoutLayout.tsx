import { Outlet } from 'react-router-dom'
import Avatar from '~/components/avatar'
import Logo from '~/components/logo'
import { useAppSelector } from '~/hooks/hooks'
import { RootState } from '~/store/configureStore'

const CheckoutLayout = () => {
  const { user } = useAppSelector((state: RootState) => state.auth)
  const { displayName, photoURL } = user || {
    displayName: '',
    photoURL: ''
  }
  return (
    <div className='w-full max-w-[1170px] mx-auto px-6'>
      <header className='mt-10 w-full flex items-center justify-between'>
        <Logo />
        <Avatar src={photoURL as string} alt={displayName as string} />
      </header>
      <Outlet />
    </div>
  )
}

export default CheckoutLayout
