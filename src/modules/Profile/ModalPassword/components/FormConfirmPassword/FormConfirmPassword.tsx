import { yupResolver } from "@hookform/resolvers/yup"
import { FirebaseError } from "firebase/app"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FormGroup } from "~/components/FormGroup/FormGroup"
import Input from "~/components/Input/Input"
import Button from "~/components/button"
import { schema } from "~/utils/schema"

interface IFormConfirmPassword {
  onSubmit: () => (currentPassword: {
    currentPassword: string
  }) => Promise<void>
}

const ConfirmPassSchema = schema.pick(["currentPassword"])
export const FormConfirmPassword = ({ onSubmit }: IFormConfirmPassword) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { control, handleSubmit, formState: { errors }, setError } = useForm<{
    currentPassword: string
  }>({
    defaultValues: {
      currentPassword: ""
    },
    resolver: yupResolver(ConfirmPassSchema)
  })

  const onSubmitData = handleSubmit(async (data) => {
    setLoading(true)
    try {
      await onSubmit()(data)
    } catch (error) {
      setError('currentPassword', {
        type: 'manual',
        message: (error as FirebaseError).message
      })
    } finally {
      setLoading(false)
    }
  }
  )

  return <form onSubmit={onSubmitData}>
    <FormGroup>
      <label htmlFor="email" className="text-text3 text-sm">Current Password</label>
      <Input errorField={errors.currentPassword?.message} disabled={false} type="password" control={control} name="currentPassword" id="currentPassword" placeholder="Your current password" />
    </FormGroup>
    <FormGroup>
      <Button isLoading={loading} disabled={loading} type="submit" className="w-full" kind="primary">Confirm</Button>
    </FormGroup>
  </form>
}