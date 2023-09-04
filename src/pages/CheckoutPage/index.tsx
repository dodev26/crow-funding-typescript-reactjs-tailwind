import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { PayMethod, Summury } from '~/modules/checkout'
import { CheckoutSchemaType, checkoutSchema } from '~/utils/schema'

type FormData = CheckoutSchemaType
const checkoutSchemaValidator = checkoutSchema
export const CheckoutPage = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      term: false,
      payMethod: 'paypal'
    },
    resolver: yupResolver(checkoutSchemaValidator)
  })

  const onSubmit = methods.handleSubmit(async (data) => console.log(data))

  return (
    <div className='w-full h-full relative'>
      <FormProvider {...methods}>
        <form
          onSubmit={onSubmit}
          className='mt-[30px] w-full max-w-[891px]  grid md:grid-cols-[294px,1fr] gap-x-[50px] xl:gap-x-[135px]'
        >
          <PayMethod />
          <Summury />
        </form>
      </FormProvider>
    </div>
  )
}
