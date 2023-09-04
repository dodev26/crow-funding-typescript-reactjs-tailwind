import { Heading } from '~/components/heading/Heading'
import ThemeSettings from '~/modules/settings/themeSettings'
import LangSettings from '~/modules/settings/langSettings'
import { useTranslation } from 'react-i18next'
import { lang } from './lang'
import PageTitle from '~/components/pageTitle'

export const SettingsPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle>Settings</PageTitle>
      <div className='w-full  max-w-[1098px] px-5 md:px-10 md:py-8 py-7 mx-auto lg:px-[130px] lg:pt-[50px] pb-[60px] bg-inherit dark:bg-darkSecondary dark:rounded-xl'>
        <Heading as='h1' className=' text-[25px] font-bold leading-9'>
          {t(lang.heading())}
        </Heading>
        <p className='text-sm text-text3 mt-[5px]'>{t(lang.subHeading())}</p>
        <LangSettings className='mt-8' />
        <ThemeSettings className='mt-8' />
      </div>
    </>
  )
}
