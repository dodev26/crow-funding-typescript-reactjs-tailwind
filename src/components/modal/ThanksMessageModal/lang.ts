import { translations } from '~/locales/translation'
import { _t } from '~/utils/lang'

export const lang = {
  heading: () => _t(translations.thanksModal.heading),
  subheading: () => _t(translations.thanksModal.subheading),
  shareThisCampaign: () => _t(translations.thanksModal.shareThisCampaign)
}
