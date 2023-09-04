import { doc } from 'firebase/firestore'
import { db } from '~/firebase/initialize'
import { useAppSelector } from './hooks'
import { RootState } from '~/store/configureStore'

export default function useColRefUser() {
  const { user: UserData } = useAppSelector((state: RootState) => state.auth)
  const colRefUser = doc(db, 'users', UserData?.uid as string)

  return colRefUser
}
