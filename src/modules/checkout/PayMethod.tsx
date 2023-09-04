import { PayOneer, Paypal } from '~/assets'
import { Heading } from '~/components/heading/Heading'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { MethodOption } from './components'
import { Controller, useFormContext } from 'react-hook-form'

type PayMethod = 'paypal' | 'payoneer'
const PAY_METHOD: readonly {
  nameMethod: PayMethod
  value: PayMethod
  img: string
}[] = [
  {
    nameMethod: 'paypal',
    value: 'paypal',
    img: Paypal
  },
  {
    nameMethod: 'payoneer',
    value: 'payoneer',
    img: PayOneer
  }
] as const

interface IPayMethod {
  onChange?: (value: PayMethod) => void
}
const PayMethod = ({ onChange }: IPayMethod) => {
  const [pay, setPay] = useState<PayMethod>('paypal')

  const onChangeMethod = (value: PayMethod) => {
    setPay(value)
    onChange && onChange(value)
  }

  const { control } = useFormContext()
  return (
    <div className='w-full h-auto'>
      <Heading className='font-bold text-[30px] text-text1'>Payment</Heading>
      <div>
        <Controller
          control={control}
          name='payMethod'
          render={({ field }) => (
            <RadioGroup
              value={pay}
              className='w-full flex gap-x-[22px] md:gap-x-0  md:justify-between mt-10'
              onChange={(v) => {
                field.onChange(v)
                onChangeMethod(v)
              }}
            >
              {PAY_METHOD.map((method) => (
                <RadioGroup.Option value={method.value} key={method.value}>
                  {({ checked }) => (
                    <MethodOption
                      checked={checked}
                      img={method.img}
                      key={method.nameMethod}
                      nameMethod={method.nameMethod}
                    />
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          )}
        />
      </div>
    </div>
  )
}
export default PayMethod
