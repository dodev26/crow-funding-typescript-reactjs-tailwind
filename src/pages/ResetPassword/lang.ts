import { translations } from '~/locales/translation'
import { _t } from '~/utils/lang'

export const lang = {
  heading: () => _t(translations.resetPassword.heading),
  label: () => _t(translations.resetPassword.label),
  placeholder: () => _t(translations.resetPassword.placeholder),
  submit: () => _t(translations.resetPassword.submit)
}
