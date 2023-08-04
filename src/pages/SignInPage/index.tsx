import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Label from '~/components/Label'
import Input from '~/components/Input/Input'
import Button from '~/components/button'
import { SchemaType, schema } from '~/utils/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import ButtonGoogle from '~/components/buttonGoogle'
import { FormGroup } from '~/components/FormGroup/FormGroup'
import { useAppDispatch, useAppSelector } from '~/hooks/hooks'
import { loginRequest } from '~/store/auth/authSlice'
import { RootState } from '~/store/configureStore'




type FormFields = Required<Pick<SchemaType, "email" | "password">>
const signInSchema = schema.pick(["email", "password"])
const defaultValues: FormFields = {
  email: "",
  password: "",
}
export const SignInPage = () => {
  const { loading, error: errorFromAuthSlice } = useAppSelector((state: RootState) => state.auth)
  const { handleSubmit, control, formState: { errors } } = useForm<FormFields>({
    defaultValues,
    resolver: yupResolver(signInSchema)
  })
  const dispatch = useAppDispatch()

  const onSubmit = handleSubmit((data) => {
    dispatch(loginRequest(data))

  })


  return (
    <>
      <h1 className='mb-1 text-lg lg:text-xl  text-center lg:mb-3  font-semibold text-text1 dark:text-white'>Sign Up
      </h1>
      <p className='text-xs mb-5  text-text3 font-normal text-center lg:text-sm'>Dont have an account? <Link to="/sign-up" className='text-primary font-medium underline'>Sign up</Link></p>
      <ButtonGoogle />
      {errorFromAuthSlice && <div className='w-full rounded-xl p-4 flex mb-5 items-center justify-center text-sm bg-red-100 border text-error border-error'>{errorFromAuthSlice}</div>}
      <form onSubmit={onSubmit}>
        <FormGroup>
          <Label htmlFor='email' className="dark:text-text3  text-sm">Email</Label>
          <Input disabled={loading} errorField={errors.email?.message} id="email" name='email' type="text" control={control} placeholder='Email address' />
        </FormGroup>
        <FormGroup className='mb-0'>
          <Label htmlFor='password' className="dark:text-text3  text-sm">Password</Label>
          <Input disabled={loading} errorField={errors.password?.message} id="password" name='password' type="password" control={control} placeholder='Your password' />
        </FormGroup>
        <div className='flex items-center justify-end mb-5'>
          <Link to="/forgot-password" className='text-primary text-sm font-medium hover:underline'>Forgot password</Link>
        </div>
        <Button disabled={loading} isLoading={loading} type='submit' kind='primary' className='w-full' >Sign in</Button>
      </form>
    </>
  )
}

