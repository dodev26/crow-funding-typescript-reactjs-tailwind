import { Heading } from '~/components/heading/Heading'
import { ProductCard } from './components'
import InfoPrice from './components/InfoPrice'
import Button from '~/components/button'
import CheckTermPolicy from '~/components/checkTermPolicy'
import { useFormContext } from 'react-hook-form'

const Summury = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext<{
    term: boolean
  }>()

  return (
    <div className='w-full px-[15px] py-[25px] md:px-[20px] md:py-[15px]'>
      <Heading as='h2' className='text-text2 font-semibold text-xs md:text-lg p-0 md:p-[10px]'>
        Contribution Summury{' '}
      </Heading>
      <ProductCard
        img='https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        name='lorem ipsum dolor sit amet consectetur adipisicing elit'
        price={1000}
        className='mt-[15px]'
      />
      <InfoPrice price={1000} title='Subtotal' className='mt-[15px]' />
      <InfoPrice price={1000} title='Shipping' className='mt-[10px]' />
      <InfoPrice price={1000} title='TOTAL' className='font-bold text-text1 mt-[25px]' />
      <CheckTermPolicy control={control} name='term' errorField={errors.term?.message} className='mt-[30px]' />
      <Button type='submit' className='w-full mt-[10px]' kind='primary'>
        Submit Payment
      </Button>
    </div>
  )
}
export default Summury
