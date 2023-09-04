import { useTranslation } from 'react-i18next'
import { PayOneer, PayOnnerDark, Paypal } from '~/assets'
import { Heading } from '~/components/heading/Heading'
import { useAppSelector } from '~/hooks/hooks'
import PaymentCard from '~/modules/payment/PaymentCard'
import { RootState } from '~/store/configureStore'
import { lang } from './lang'
import PageTitle from '~/components/pageTitle'

export const PaymentPage = () => {
  const { t } = useTranslation()
  const { theme } = useAppSelector((state: RootState) => state.theme)
  return (
    <>
      <PageTitle>Payment</PageTitle>
      <div className='w-full mx-auto md:max-w-[624px] md:pt-[66px]'>
        <Heading className='text-lg md:text-[25px] font-bold mb-[10px] text-center max-w-[310px] md:max-w-[430px] mx-auto'>
          {t(lang.heading())}
        </Heading>
        <p className='max-w-[271px] md:text-base md:max-w-[554px] text-center mx-auto text-xs text-text3'>
          To Start {t(lang.subheading())}
        </p>
        <div className='flex flex-col sm:flex-row sm:justify-center  sm:gap-x-10 gap-y-5 items-center mt-[25px] sm:mt-[60px]'>
          <PaymentCard btnText='Comming soon' imgIcon={Paypal} desc={t(lang.paypalDesc())} />
          <PaymentCard
            btnText='Comming soon'
            imgIcon={theme === 'dark' ? PayOnnerDark : PayOneer}
            desc={t(lang.payoneerDesc())}
          />
        </div>
      </div>
    </>
  )
}
