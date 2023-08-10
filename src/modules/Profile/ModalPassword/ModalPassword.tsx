import ReactModal from "react-modal"
import { Heading } from "~/components/heading/Heading"
import { useModal } from "~/contexts/modal.context"
import FormConfirmPassword from "./components/FormConfirmPassword"
import { PersonalFormFields } from "~/pages/ProfilePage"
import { useAppDispatch, useAppSelector } from "~/hooks/hooks"
import { updateUserFailure, updateUserRequest, updateUserSuccess } from "~/store/auth/authSlice"
import { uploadTaskPromise } from "~/utils/scripts"
import { EmailAuthProvider, User, reauthenticateWithCredential, updateProfile } from "firebase/auth"
import { auth, db } from "~/firebase/initialize"
import { doc, updateDoc } from "firebase/firestore"
import { RootState } from "~/store/configureStore"
import { toast } from "react-toastify"
import { FirebaseError } from "firebase/app"


interface IModalPassword {
  dataUpdate: PersonalFormFields
}

export const ModalPassword = ({ dataUpdate }: IModalPassword) => {
  const { closeModal } = useModal()
  const dispatch = useAppDispatch()
  const { user: UserData, loading } = useAppSelector((state: RootState) => state.auth)

  const handleConfirmPassAndUpdateData = (dataUpdate: PersonalFormFields) => async (currentPassword: {
    currentPassword: string
  }): Promise<void> => {
    dispatch(updateUserRequest())
    try {
      const colRefUser = doc(db, 'users', UserData?.uid as string)
      const credential = EmailAuthProvider.credential(auth.currentUser?.email as string, currentPassword.currentPassword)
      await reauthenticateWithCredential(auth.currentUser as User, credential)
      const avatar = dataUpdate.avatarURL as File
      let linkAvatar: string = ""
      const dataPayload = { ...dataUpdate }
      if (avatar && typeof avatar !== "string") {
        linkAvatar = await uploadTaskPromise(avatar, 'images/' + avatar.name)
        dataPayload.avatarURL = linkAvatar
      }
      await updateDoc(colRefUser, dataPayload)
      await updateProfile(auth.currentUser as User, {
        displayName: dataPayload.firstName + dataPayload.lastName,
        photoURL: dataPayload.avatarURL as string
      }
      )
      toast.success('Update personal info successfully')
      dispatch(updateUserSuccess(auth.currentUser as User))
      closeModal()
    } catch (error) {
      if (error instanceof FirebaseError) {
        dispatch(updateUserFailure(error.message))
        throw new Error(error.message)
      }
    }
  }

  return <ReactModal isOpen overlayClassName="modal-overlay fixed inset-0 bg-black/40 z-50 flex items-center justify-center" className="modal-content w-full max-w-[521px] bg-white dark:bg-darkSecondary rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-scroll scroll-hidden">
    <button disabled={loading} onClick={closeModal} type="button" className="w-10 h-10 flex items-center justify-center rounded hover:bg-error hover:text-white hover:border hover:border-strock absolute right-3 top-3 transition-all  text-text1 z-10 cursor-pointer dark:text-text3 dark:border-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    </button>
    <Heading className="font-bold text-[25px] text-center mb-10 dark:text-white" as="h2">Confirm Password To Update</Heading>
    <FormConfirmPassword onSubmit={() => handleConfirmPassAndUpdateData(dataUpdate)} />
  </ReactModal>
}