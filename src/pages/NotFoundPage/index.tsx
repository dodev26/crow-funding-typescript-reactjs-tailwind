import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { lang } from './lang'
import { Heading } from '~/components/heading/Heading'

export const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <section className='bg-white dark:bg-transparent'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <Heading as='h1' className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-secondary'>
            {t(lang.heading())}
          </Heading>
          <p className='mb-4 text-base font-light text-gray-500 dark:text-gray-400'>{t(lang.subheading())}</p>
          <Link
            to='/'
            className='inline-flex text-white bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4'
          >
            {t(lang.back())}
          </Link>
        </div>
      </div>
    </section>
  )
}
