import { translations } from '~/locales/translation'
import { _t } from '~/utils/lang'

export const lang = {
  question: () => _t(translations.signUp.question),
  tearmsOfUse: () => _t(translations.signUp.tearmsOfUse),
  privacyPolicy: () => _t(translations.signUp.privacyPolicy)
}
