import { translations } from "~/locales/translation"
import { _t } from "~/utils/lang"


export const lang = {
  heading: () => _t(translations.campaign.heading),
  subheading: () => _t(translations.campaign.subheading),
  help: () => _t(translations.campaign.help),
  create: () => _t(translations.campaign.create),
  yourCampaign: () => _t(translations.campaign.yourCampaign),
}