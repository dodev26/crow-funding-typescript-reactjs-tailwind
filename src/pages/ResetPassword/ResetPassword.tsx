import { yupResolver } from '@hookform/resolvers/yup'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FormGroup } from '~/components/FormGroup/FormGroup'
import Input from '~/components/Input/Input'
import Label from '~/components/Label'
import Button from '~/components/button'
import { Heading } from '~/components/heading/Heading'
import { auth, db } from '~/firebase/initialize'
import { SchemaType, schema } from '~/utils/schema'
import { lang } from './lang'
import { useModal } from '~/contexts/modal.context'
import { useState } from 'react'
import { SendSuccessModal } from '~/modules/resetPassword'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'

const SchemaResetPassword = schema.pick(['email'])
type FormData = Pick<SchemaType, 'email'>
const ResetPassword = () => {
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      email: ''
    },
    resolver: yupResolver(SchemaResetPassword)
  })
  const { t } = useTranslation()
  const { openModal } = useModal()
  const [isLoading, setIsLoading] = useState(false)

  const onResetPassword = handleSubmit(async (data) => {
    setIsLoading(true)
    try {
      const { email } = data
      console.log(email)
      const q = query(collection(db, 'users'), where('email', '==', email))
      const emailExits = await getDocs(q)
      if (emailExits.empty) {
        throw new Error('Email does not exist')
      }
      await sendPasswordResetEmail(auth, email)
      openModal(<SendSuccessModal />)
      reset({
        email: ''
      })
    } catch (error) {
      if (error instanceof Error || error instanceof FirebaseError) {
        setError('email', {
          type: 'manual',
          message: error.message
        })
      }
    } finally {
      setIsLoading(false)
    }
  })

  return (
    <div className='w-full h-auto relative'>
      <Heading className='text-lg sm:text-xl text-center font-semibold capitalize'>{t(lang.heading())}</Heading>
      <form onSubmit={onResetPassword} className='mt-5'>
        <FormGroup>
          <Label className='capitalize'>{t(lang.label())}</Label>
          <Input
            disabled={isLoading}
            errorField={errors.email?.message}
            type='email'
            control={control}
            name='email'
            placeholder={t(lang.placeholder())}
          />
        </FormGroup>
        <Button type='submit' disabled={isLoading} isLoading={isLoading} className='w-full' kind='primary'>
          {t(lang.submit())}
        </Button>
      </form>
    </div>
  )
}

export default ResetPassword
