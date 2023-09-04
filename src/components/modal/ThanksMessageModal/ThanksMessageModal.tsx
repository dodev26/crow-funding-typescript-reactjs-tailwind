import { useTranslation } from 'react-i18next'
import Button from '../../button'
import { Heading } from '../../heading/Heading'
import { lang } from './lang'

const ThanksMessageModal = () => {
  const { t } = useTranslation()
  return (
    <div className='w-full md:w-[570px] rounded-xl dark:bg-darkSecondary py-4 px-6 md:p-10'>
      <div className='w-full mx-auto max-w-[434px]'>
        <div className='w-[60px] mx-auto h-[60px] animate-pulse text-primary bg-primary/10 flex items-center justify-center rounded-full overflow-hidden'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-[37px] h-[37px]'>
            <path
              fillRule='evenodd'
              d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <Heading className='text-center mt-[15px] md:mt-5 text-text1 text-base md:text-[22px] font-semibold'>
          {t(lang.heading())}
        </Heading>
        <p className='md:text-sm mt-[10px] md:mt-5 text-xs text-text3 text-center'>{t(lang.subheading())}</p>
        <Button type='button' className='w-full max-w-[370px] text-base mx-auto mt-[25px]' kind='secondary'>
          {t(lang.shareThisCampaign())}
        </Button>
      </div>
    </div>
  )
}

export default ThanksMessageModal
