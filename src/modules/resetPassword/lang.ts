import { translations } from '~/locales/translation'
import { _t } from '~/utils/lang'

export const lang = {
  heading: () => _t(translations.sendSuccessModal.heading),
  subheading: () => _t(translations.sendSuccessModal.subheading),
  back: () => _t(translations.sendSuccessModal.back)
}
