import { Heading } from '~/components/heading/Heading'
import { useModal } from '~/contexts/modal.context'
import FormConfirmPassword from './components/FormConfirmPassword'
import { PersonalFormFields } from '~/pages/ProfilePage'
import { useAppDispatch } from '~/hooks/hooks'
import { updateUserFailure, updateUserRequest, updateUserSuccess } from '~/store/auth/authSlice'
import { uploadTaskPromise } from '~/utils/scripts'
import { EmailAuthProvider, User, reauthenticateWithCredential, updateProfile } from 'firebase/auth'
import { auth, db } from '~/firebase/initialize'
import { doc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { FirebaseError } from 'firebase/app'

interface IModalPassword {
  dataUpdate: PersonalFormFields
}

export const ModalPassword = ({ dataUpdate }: IModalPassword) => {
  const { closeModal, setIsLoading } = useModal()
  const dispatch = useAppDispatch()
  const handleConfirmPassAndUpdateData =
    (dataUpdate: PersonalFormFields) =>
    async (currentPassword: { currentPassword: string }): Promise<void> => {
      dispatch(updateUserRequest())
      setIsLoading && setIsLoading(true)
      try {
        const colRefUser = doc(db, 'users', dataUpdate.idDoc)
        const credential = EmailAuthProvider.credential(
          auth.currentUser?.email as string,
          currentPassword.currentPassword
        )
        await reauthenticateWithCredential(auth.currentUser as User, credential)
        const avatar = dataUpdate.avatarURL as File
        let linkAvatar: string = ''
        const dataPayload = { ...dataUpdate }
        if (avatar && typeof avatar !== 'string') {
          linkAvatar = await uploadTaskPromise(avatar, 'images/' + avatar.name)
          dataPayload.avatarURL = linkAvatar
        }
        await updateDoc(colRefUser, dataPayload)
        await updateProfile(auth.currentUser as User, {
          displayName: dataPayload.firstName + dataPayload.lastName,
          photoURL: dataPayload.avatarURL as string
        })
        toast.success('Update personal info successfully')
        dispatch(updateUserSuccess(auth.currentUser as User))
        closeModal()
      } catch (error) {
        if (error instanceof FirebaseError) {
          dispatch(updateUserFailure(error.message))
          throw new Error(error.message)
        }
      } finally {
        setIsLoading && setIsLoading(false)
      }
    }

  return (
    <div className='modal-password w-full sm:w-[440px] sm:px-8 rounded-xl dark:bg-darkSecondary px-5 pb-6'>
      <Heading className='font-bold text-base  sm:text-[22px] text-center mb-8 dark:text-white' as='h2'>
        Confirm Password To Update
      </Heading>
      <FormConfirmPassword onSubmit={() => handleConfirmPassAndUpdateData(dataUpdate)} />
    </div>
  )
}
