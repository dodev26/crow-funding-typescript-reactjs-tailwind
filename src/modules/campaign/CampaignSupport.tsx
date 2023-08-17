import { useForm } from 'react-hook-form'
import Input from '~/components/Input/Input'
import Button from '~/components/button'

export const CampaignSupport = () => {
  const { control } = useForm()
  return (
    <div>
      <h2 className='text-lg font-semibold mb-5 dark:text-white'>Support</h2>
      <form className='w-full bg-white shadow py-7 px-6 dark:bg-darkSecondary flex flex-col justify-center  rounded-lg'>
        <p className='text-xl text-center  mb-8 text-text3'>Pledge without reward</p>
        <Input
          hideError
          type='text'
          name='sp'
          control={control}
          placeholder='$10'
          classInputWrapper='mb-5'
          className='w-full px-5 py-3 text-lg font-medium border rounded border-strock'
        />
        <div className='p-5  rounded-xl text-sm bg-grayf3 dark:bg-darkbg mb-5'>
          <p className=' text-text2 dark:text-white font-semibold mb-5'>Back it because you believe in it.</p>
          <p className='max-w-[331px] dark:text-text3 text-text3'>
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind='secondary' className='w-full'>
          Continue
        </Button>
      </form>
    </div>
  )
}
