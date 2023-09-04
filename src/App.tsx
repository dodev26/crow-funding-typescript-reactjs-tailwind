import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import AuthLayout from '~/layout/AuthLayout'
import DashboardLayout from '~/layout/DashboardLayout'
import { PATH } from '~/constants'
import Modal from 'react-modal'
import { DashboardPage } from './pages/DashboardPage/Loadable'
import { CampaignPage } from './pages/CampaignPage/Loadable'
import { CampaignDetailPage } from './pages/CampaignDetailPage/Loadable'
import { StartCampaignPage } from './pages/StartCampaignPage/Loadable'
import { SignUpPage } from './pages/SignUpPage/Loadable'
import { SignInPage } from './pages/SignInPage/Loadable'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/initialize'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { loginSuccess, logout } from './store/auth/authSlice'
import { RootState } from './store/configureStore'
import { ProfilePage } from './pages/ProfilePage'
import { PaymentPage } from './pages/PaymentPage'
import { SettingsPage } from './pages/SettingsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { WithDrawPage } from './pages/WithDrawPage/Loadable'
import CheckoutLayout from './layout/CheckoutLayout'
import { CheckoutPage } from './pages/CheckoutPage'
import { CampaignEditPage } from './pages/CampaignEditPage/Loadable'
import ScrollToTop from './modules/app'
import { ResetPassword } from './pages/ResetPassword/Loadable'

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

Modal.setAppElement('#root')
Modal.defaultStyles = {}

const ProtectedRoute = () => {
  const { isAuth, user } = useAppSelector((state: RootState) => state.auth)

  return isAuth && user ? <Outlet /> : <Navigate to='/sign-in' />
}

const RejectedRoute = () => {
  const { isAuth, user } = useAppSelector((state: RootState) => state.auth)

  return !isAuth && !user ? <Outlet /> : <Navigate to='/' />
}
const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth)
        dispatch(loginSuccess(userAuth))
      } else {
        dispatch(logout())
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path={PATH.campaign} element={<CampaignPage />} />
            <Route path={PATH.campaign_detail} element={<CampaignDetailPage />} />
            <Route path={PATH.campaign_start} element={<StartCampaignPage />} />
            <Route path={PATH.campaign_edit} element={<CampaignEditPage />} />
            <Route path={PATH.profile} element={<ProfilePage />} />
            <Route path={PATH.payment} element={<PaymentPage />} />
            <Route path={PATH.withdraw} element={<WithDrawPage />} />
            <Route path={PATH.settings} element={<SettingsPage />} />
          </Route>
          <Route element={<CheckoutLayout />}>
            <Route index path={PATH.checkout} element={<CheckoutPage />} />
          </Route>
        </Route>
        <Route element={<RejectedRoute />}>
          <Route element={<AuthLayout />}>
            <Route path={PATH.reset_password} element={<ResetPassword />} />
            <Route path={PATH.sign_up} element={<SignUpPage />} />
            <Route path={PATH.sign_in} element={<SignInPage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
