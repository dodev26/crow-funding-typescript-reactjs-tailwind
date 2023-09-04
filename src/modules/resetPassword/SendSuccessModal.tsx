import { useTranslation } from 'react-i18next'
import Button from '~/components/button'
import { Heading } from '~/components/heading/Heading'
import { useModal } from '~/contexts/modal.context'
import { lang } from './lang'

const SendSuccessModal = () => {
  const { closeModal } = useModal()
  const { t } = useTranslation()

  return (
    <div className='md:w-[500px] w-full sm:w-[400px] px-6 pb-6'>
      <div className='w-[60px] mx-auto h-[60px] animate-pulse text-primary bg-primary/10 flex items-center justify-center rounded-full overflow-hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
          />
        </svg>
      </div>
      <Heading className='text-center sm:text-lg text-base font-semibold mt-4'>{t(lang.heading())}</Heading>
      <p className='text-xs text-center sm:text-sm text-text3 mt-2'>{t(lang.subheading())}</p>
      <Button onClick={closeModal} kind='secondary' type='button' className='w-full mt-4'>
        {t(lang.back())}
      </Button>
    </div>
  )
}
export default SendSuccessModal
