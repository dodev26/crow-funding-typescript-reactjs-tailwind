import { Trans, useTranslation } from 'react-i18next'
import Checkbox from '../checkbox'
import { Link } from 'react-router-dom'
import { lang } from './lang'
import { cn } from '~/utils/scripts'

interface ICheckTermPolicy {
  control: any
  errorField?: string
  name: string
  hiddenError?: boolean
  className?: string
}
const CheckTermPolicy = ({ control, errorField, name, className }: ICheckTermPolicy) => {
  const { t } = useTranslation()
  return (
    <div className={cn('flex items-start gap-x-5 mb-5', className)}>
      <Checkbox errorField={errorField} control={control} name={name} id='term' />
      <div className='text-xs md:text-sm text-text4 max-w-[325px]'>
        <Trans
          i18nKey={t(lang.question())}
          t={t}
          values={{
            tearmsOfUse: t(lang.tearmsOfUse()),
            privacyPolicy: t(lang.privacyPolicy())
          }}
          components={[
            <Link to='/' className='underline text-secondary font-thin' />,
            <Link to='/' className='underline text-secondary font-thin' />
          ]}
        ></Trans>
      </div>
    </div>
  )
}

export default CheckTermPolicy
