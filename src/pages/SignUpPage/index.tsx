import { Link } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form"
import Label from '~/components/Label'
import Input from '~/components/Input/Input'
import Button from '~/components/button'
import Checkbox from '~/components/checkbox'
import { SchemaType, schema } from '~/utils/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import ButtonGoogle from '~/components/buttonGoogle'
import { FormGroup } from '~/components/FormGroup/FormGroup'
import { omit } from 'lodash'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { auth, db } from '~/firebase/initialize'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { FirebaseError } from '@firebase/util'
import { toast } from 'react-toastify'
import FormRow from '~/components/FormRow'
import DatePicker from '~/components/DatePicker'
import InputNumber from '~/components/inputNumber'
import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Heading } from '~/components/heading/Heading'
import { lang } from './lang'
import { PATH } from '~/constants'

type FormFields = Required<Pick<SchemaType, 'email' | "firstName" | "lastName" | "password" | "term" | 'confirmPassword' | 'dateOfBirth' | 'phone'>>
const signUpSchema = schema.pick(["email", "firstName", "password", "term", 'confirmPassword', "lastName", 'dateOfBirth', 'phone'])
const defaultValues: FormFields = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  term: false,
  confirmPassword: "",
  dateOfBirth: new Date(),
  phone: ""
}

export const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation()
  const { handleSubmit, control, formState: { errors }, reset } = useForm<FormFields>({
    defaultValues,
    resolver: yupResolver(signUpSchema)
  })


  const onSubmit = handleSubmit(async (data) => {
    const validData = omit(data, ['confirmPassword', 'term'])
    setIsLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, validData.email, validData.password)
      await updateProfile(userCredential.user, {
        displayName: `${validData.firstName} ${validData.lastName}`,
        photoURL: 'https://i.pravatar.cc/300'
      })
      await setDoc(doc(db, "users", String(auth.currentUser?.uid)), {
        ...validData,
        avatarURL: 'https://i.pravatar.cc/300',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      await sendEmailVerification(userCredential.user)
      toast.success('Sign up successfully')
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          toast.error('Email already in use')
        }
      }
    } finally {
      reset()
      setIsLoading(false)
    }
  })
  return (
    <>
      <Heading className='mb-1 text-lg lg:text-xl  text-center lg:mb-3  font-semibold text-text1 dark:text-white'>{
        t(lang.heading())
      }
      </Heading>
      <p className='text-xs mb-6 lg:mb-8 text-text3 font-normal text-center lg:text-sm'>{t(lang.haveAccount())} <Link to={PATH.sign_in} className='text-primary font-medium underline'>{t(lang.signIn())}</Link></p>

      <ButtonGoogle text={t(lang.signInWithGG())} className='"hover:border-primary transition-all flex items-center justify-center w-full py-4 mb-5 gap-x-3 border border-strock dark:border-darkStroke rounded-xl ' />
      <p className='text-xs font-normal text-center lg:text-sm mb-[15px] lg:mb-8 text-text2 dark:text-white'>{
        t(lang.or())
      }</p>
      <form onSubmit={onSubmit}>
        <FormRow className='gap-x-5'>
          <FormGroup>
            <Label htmlFor='firstName' className="dark:text-text3  text-sm">{t(lang.firstName())}</Label>
            <Input errorField={errors.firstName?.message} id="firstName" name='firstName' type="text" control={control} placeholder={t(lang.pFirstName())} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='lastName' className="dark:text-text3  text-sm">{t(lang.lastName())}</Label>
            <Input errorField={errors.lastName?.message} id="lastName" name='lastName' type="text" control={control} placeholder={t(lang.pLastName())} />
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label htmlFor='email' className="dark:text-text3  text-sm">{t(lang.email())}</Label>
          <Input errorField={errors.email?.message} id="email" name='email' type="text" control={control} placeholder={
            t(lang.pEmail())
          } />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='phone' className="dark:text-text3  text-sm">{
            t(lang.phone())
          }</Label>
          <InputNumber errorField={errors.phone?.message} id="phone" name='phone' control={control} placeholder={
            t(lang.pPhone())
          } />
        </FormGroup>
        <FormGroup>
          <Label>{t(lang.dateOfBirth())}</Label>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field: { value, onChange, ...props } }) => (
              <DatePicker format="dd/MM/yyyy" errorField={errors.dateOfBirth?.message} value={value} onChange={(v) => onChange(v as Date)} {...props} />
            )}
          />

        </FormGroup>
        <FormGroup>
          <Label htmlFor='password' className="dark:text-text3  text-sm">{t(lang.password())}</Label>
          <Input errorField={errors.password?.message} id="password" name='password' type="password" control={control} placeholder={t(lang.password())} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='confirmPassword' className="dark:text-text3  text-sm">{t(lang.confirmPassword())}</Label>
          <Input errorField={errors.confirmPassword?.message} id="confirmPassword" name='confirmPassword' type="password" control={control} placeholder={t(lang.pConfirmPassword())} />
        </FormGroup>
        <div className='flex items-start gap-x-5 mb-5'>
          <Checkbox errorField={errors.term?.message} control={control} name="term" id="term" />
          {/* <p className="text-sm text-text4 max-w-[325px]">
            I agree to the <strong className="underline text-secondary font-thin">Tearms of Use</strong> and have read and
            understand the <strong className="underline text-secondary font-thin">Privacy policy</strong>.
          </p> */}
          <div className='text-sm text-text4 max-w-[325px]'>
            <Trans i18nKey={t(lang.question())} t={t}
              values={{
                tearmsOfUse: t(lang.tearmsOfUse()),
                privacyPolicy: t(lang.privacyPolicy())
              }}
              components={[
                <Link to="/" className="underline text-secondary font-thin" />,
                <Link to="/" className="underline text-secondary font-thin" />
              ]}></Trans>
          </div>
        </div>
        <Button isLoading={isLoading} disabled={isLoading} type='submit' kind='primary' className='w-full normal-case' >{t(lang.submit())}</Button>
      </form >
    </>
  )
}

