import Button from '~/components/button'
import { Heading } from '~/components/heading/Heading'
import { CampaignPerk } from '..'
import { useForm } from 'react-hook-form'
import { useModal } from '~/contexts/modal.context'
import Label from '~/components/Label'
import InputNumber from '~/components/inputNumber'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

interface IBackProjectModal {
  onSubmit: (amount: number) => Promise<void>
}
const amountValidate = yup.object().shape({
  amount: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .required('Please enter the amount')
})

type FormType = yup.InferType<typeof amountValidate>

const BackProjectModal = ({ onSubmit }: IBackProjectModal) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormType>({
    defaultValues: {
      amount: undefined
    },
    resolver: yupResolver(amountValidate)
  })
  const { setIsLoading: setIsLoadingModal } = useModal()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitBackProject = handleSubmit(async (data) => {
    setIsLoading(true)
    setIsLoadingModal && setIsLoadingModal(true)
    await onSubmit(data.amount).finally(() => {
      setIsLoading(false)
      setIsLoadingModal && setIsLoadingModal(false)
    })
  })

  return (
    <div className='modal-backing px-6 pb-6 pt-3 sm:px-10  overflow-y-scroll scroll-hidden overflow-x-hidden  rounded-xl max-h-[80vh] w-full sm:max-w-[441px] sm:pb-[50px]'>
      <Heading className='font-bold text-[25px] text-center mb-10 dark:text-white' as='h2'>
        Back this project
      </Heading>
      <form onSubmit={onSubmitBackProject}>
        <Label className='text-sm text-text3 mb-2'>Enter the contribue amount</Label>
        <InputNumber errorField={errors.amount?.message} control={control} placeholder='$10' name='amount' />
        <p className='text-sm text-text3 mb-5'>Contribution are not associatied with perks</p>
        <Button
          disabled={isLoading}
          isLoading={isLoading}
          type='submit'
          kind='primary'
          className='w-full max-w-[162px]'
        >
          Continue
        </Button>
      </form>
      <div className='mt-[60px]' />
      <div className='flex flex-col gap-y-10'>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <CampaignPerk showButton key={index} />
          ))}
      </div>
    </div>
  )
}

export default BackProjectModal
