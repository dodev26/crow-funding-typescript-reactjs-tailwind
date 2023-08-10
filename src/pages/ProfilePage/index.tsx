import { yupResolver } from "@hookform/resolvers/yup"
import { Timestamp, doc, getDoc } from "firebase/firestore"
import { EmailAuthProvider, User, reauthenticateWithCredential, updatePassword, } from "firebase/auth";
import { omit } from "lodash"
import { useEffect, useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import DatePicker from "~/components/DatePicker"
import { FormGroup } from "~/components/FormGroup/FormGroup"
import FormRow from "~/components/FormRow"
import Input from "~/components/Input/Input"
import Button from "~/components/button"
import InputNumber from "~/components/inputNumber"
import { auth, db } from "~/firebase/initialize"
import { SchemaType, schema } from "~/utils/schema"
import { Heading } from "~/components/heading/Heading";
import { useAppSelector } from "~/hooks/hooks";
import { RootState } from "~/store/configureStore";
import UploadAvatar from "~/components/uploadAvatar";
import { FirebaseError } from "firebase/app";
import { useModal } from "~/contexts/modal.context";
import ModalPassword from "~/modules/Profile/ModalPassword";



export type PersonalFormFields = Required<Pick<SchemaType, "firstName" | "lastName" | 'dateOfBirth' | 'phone' | "avatarURL">>
type CredentialsFormFields = Required<Pick<SchemaType, "email" | "password" | 'confirmPassword' | 'currentPassword'>>
const CredentialsSchema = schema.pick(["email", "password", 'confirmPassword', "currentPassword"])
const PersonalSchema = schema.pick(["firstName", "lastName", 'dateOfBirth', 'phone', "avatarURL"])

const defaultValuesPersonal: PersonalFormFields = {
  firstName: "",
  lastName: "",
  dateOfBirth: new Date(),
  phone: "",
  avatarURL: ""
}
const defaultValuesCredentials: CredentialsFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
  currentPassword: ""

}
export const ProfilePage = () => {
  const { openModal, } = useModal()
  const { user } = useAppSelector((state: RootState) => state.auth)
  const { handleSubmit: HandleSubmitPersonal, control: controlPersonalField, setValue: setPersonalValueForField, reset: resetPersonalField, watch: watchPersonalField, formState: { errors: errorPersonalField, isValid: isValidPersonalField } } = useForm<PersonalFormFields>({
    mode: 'onChange',
    defaultValues: defaultValuesPersonal,
    resolver: yupResolver(PersonalSchema)
  })

  const { handleSubmit: HandleSubmitCredentials, control: controlCredentialsField, reset: resetCredentialsField, formState: { errors: errorCredentialsField }, setError } = useForm<CredentialsFormFields>({
    mode: 'onChange',
    defaultValues: defaultValuesCredentials,
    resolver: yupResolver(CredentialsSchema)
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingProfile, setIsLoadingProfile] = useState<boolean>(false)
  const { user: UserData } = useAppSelector((state: RootState) => state.auth)
  const [updatePersonalInfo, setUpdatePersonalInfo] = useState(false)
  const [updateCredentials, setUpdateCredentials] = useState(false)
  const file = watchPersonalField("avatarURL")
  const previewImage = useMemo(() => {
    return typeof file !== "string" ? URL.createObjectURL(file as Blob | MediaSource) : ''
  }, [file])

  const colRefUser = doc(db, 'users', UserData?.uid as string)

  useEffect(() => {
    fetchProfile()
  }, [updateCredentials, updatePersonalInfo])


  const fetchProfile = async () => {
    setIsLoadingProfile(true)
    try {
      const docSnap = await getDoc(colRefUser)
      if (docSnap.exists()) {
        const data = docSnap.data()
        const personalData: PersonalFormFields = {
          ...omit(data, ['createdAt', 'updatedAt', 'email', 'password']),
          dateOfBirth: (data.dateOfBirth as Timestamp).toDate()
        } as PersonalFormFields
        const credentialsData: CredentialsFormFields = {
          ...omit(data, ['createdAt', 'updatedAt', 'firstName', 'lastName', 'dateOfBirth', 'phone', "password", "avatarURL"]),
        } as CredentialsFormFields
        resetPersonalField(personalData)
        resetCredentialsField(credentialsData)
      }
    } catch (error) {
      toast.error('Fetch profile failed')
    } finally {
      setIsLoadingProfile(false)
    }
  }

  const handleUpdatePersonalInfo = HandleSubmitPersonal((data: Required<PersonalFormFields>) => {
    openModal(<ModalPassword dataUpdate={data} />)
  })

  const handleUpdateCredentialsInfo = HandleSubmitCredentials(async (data: Required<Omit<CredentialsFormFields, "email">>) => {
    setIsLoading(true)
    const dataUpdatePassword = omit(data, ['email', 'confirmPassword'])
    try {
      const credential = EmailAuthProvider.credential(String(UserData?.email), String(dataUpdatePassword.currentPassword))
      const userCredential = await reauthenticateWithCredential(auth.currentUser as User, credential)
      if (userCredential) {
        await updatePassword(auth.currentUser as User, String(dataUpdatePassword.password))
        toast.success('Update credentials info successfully')
        setUpdateCredentials(false)
        resetCredentialsField({
          email: auth.currentUser?.email as string,
          password: "",
          confirmPassword: "",
          currentPassword: ""
        })
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/wrong-password') {
          setError('currentPassword', {
            type: 'manual',
            message: 'Current password is incorrect'
          })
        }
      }
    } finally {
      setIsLoading(false)
    }
  }
  )




  const handleTogglePersonal = () => {
    if (updateCredentials) {
      setUpdatePersonalInfo(true)
      setUpdateCredentials(false)
    } else {
      setUpdatePersonalInfo(!updatePersonalInfo)
    }
  }

  const handleToggleCredentials = () => {
    if (updatePersonalInfo) {
      setUpdateCredentials(true)
      setUpdatePersonalInfo(false)
    } else {
      setUpdateCredentials(!updateCredentials)
    }
  }


  return <div className="w-full  max-w-[1098px] px-5 md:px-10 md:py-8 py-7 mx-auto lg:px-[130px] lg:pt-[50px] pb-[60px] bg-inherit dark:bg-darkSecondary dark:rounded-xl">
    <Heading as="h1" className=" text-[25px] font-bold leading-9">Account Information</Heading>
    <p className="text-sm text-text3 mt-[5px]">Update your account information</p>

    <form onSubmit={handleUpdatePersonalInfo} className="mt-[55px] w-full">
      <div className="flex items-center justify-between">
        <Heading as="h2" className="text-xl font-bold">Personal Information</Heading>
        {updatePersonalInfo ? <button type="button" disabled={isLoading} onClick={handleTogglePersonal} className="flex items-center text-error justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button> : <button disabled={isLoading} type="button" onClick={handleTogglePersonal} className="flex items-start gap-x-2 text-secondary text-xl font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          <span>Edit</span>
        </button>}
      </div>
      <FormGroup className="mt-[35px]">
        <Controller
          name="avatarURL"
          control={controlPersonalField}
          render={({ field: { value, onChange, name, ...rest } }) => (
            <UploadAvatar isLoading={isLoadingProfile} open={
              updatePersonalInfo
            } avatarURL={(previewImage || user?.photoURL || value) as string} name={name} onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) {
                setPersonalValueForField(name, file)
              }
            }} {...rest} />
          )}
        />
      </FormGroup>
      <FormRow className="gap-x-[41px] mt-[35px]">
        <FormGroup>
          <label htmlFor="firstName" className="text-text3 text-sm">First Name</label>
          <Input disabled={!updatePersonalInfo} type="text" errorField={errorPersonalField.firstName?.message} control={controlPersonalField} name="firstName" id="firstName" placeholder="First name" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="lastName" className="text-text3 text-sm">Last Name</label>
          <Input disabled={!updatePersonalInfo} type="text" errorField={errorPersonalField.lastName?.message} control={controlPersonalField} name="lastName" id="lastName" placeholder="Last name" />
        </FormGroup>
      </FormRow>
      <FormRow className="gap-x-[41px] mt-[5px]">
        <FormGroup>
          <label htmlFor="firstName" className="text-text3 text-sm">Date of Birth</label>
          <Controller
            name="dateOfBirth"
            control={controlPersonalField}
            render={({ field: { value, onChange, ...props } }) => (
              <DatePicker disabled={!updatePersonalInfo} format="dd/MM/yyyy" errorField={errorPersonalField.dateOfBirth?.message} value={value} onChange={(v) => onChange(v as Date)} {...props} />
            )}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="phone" className="text-text3 text-sm">Mobile Number</label>
          <InputNumber disabled={!updatePersonalInfo} control={controlPersonalField} errorField={errorPersonalField.phone?.message} name="phone" id="phone" placeholder="Your phone" />
        </FormGroup>
      </FormRow>
      {updatePersonalInfo && <Button disabled={!isValidPersonalField || isLoading} isLoading={isLoading} type="submit" kind="primary" className="w-full inline-block max-w-[164px]">Update</Button>}
    </form>
    <form className="mt-[55px] w-full">
      <div className="flex items-center justify-between">
        <Heading as="h2" className="text-xl font-bold">Credentials</Heading>
        {updateCredentials ? <button type="button" disabled={isLoading} onClick={handleToggleCredentials} className="flex items-center text-error justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button> : <button type="button" disabled={isLoading} onClick={handleToggleCredentials} className="flex items-start gap-x-2 text-secondary text-xl font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          <span>Edit</span>
        </button>}
      </div>
      <FormRow className="gap-x-[41px] mt-[35px]">
        <FormGroup>
          <label htmlFor="email" className="text-text3 text-sm">Email</label>
          <Input disabled={true} className="cursor-not-allowed" errorField={errorCredentialsField.email?.message} type="email" control={controlCredentialsField} name="email" id="email" placeholder="Your Email" />
        </FormGroup>
      </FormRow>
      <FormRow className="gap-x-[41px] mt-[35px]">
        <FormGroup>
          <label htmlFor="email" className="text-text3 text-sm">Current Password</label>
          <Input disabled={!updateCredentials} errorField={errorCredentialsField.currentPassword?.message} type="password" control={controlCredentialsField} name="currentPassword" id="currentPassword" placeholder="Your current password" />
        </FormGroup>
      </FormRow>
      <FormRow className="gap-x-[41px] mt-[5px]">
        <FormGroup>
          <label htmlFor="password" className="text-text3 text-sm">New Password</label>
          <Input disabled={!updateCredentials} type="password" control={controlCredentialsField} errorField={errorCredentialsField.password?.message} name="password" placeholder="Your new password" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="confirmPassword" className="text-text3 text-sm">Confirm Password</label>
          <Input disabled={!updateCredentials} type="password" control={controlCredentialsField} errorField={errorCredentialsField.confirmPassword?.message} name="confirmPassword" id="confirmPassword" placeholder="Your confirm password" />
        </FormGroup>+
      </FormRow>
      {updateCredentials && <Button onClick={handleUpdateCredentialsInfo} disabled={isLoading} isLoading={isLoading} kind="primary" className="w-full inline-block max-w-[164px]">Update</Button>}
    </form>
  </div>
}