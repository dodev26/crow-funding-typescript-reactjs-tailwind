import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
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
  const { control, handleSubmit, formState: { errors } } = useForm<{
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
      toast.error('Confirm password failed')
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