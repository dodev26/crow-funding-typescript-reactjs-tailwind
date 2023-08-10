import { translations } from "~/locales/translation"
import { _t } from "~/utils/lang"


export const lang = {
  heading: () => _t(translations.settings.language.heading),
  subHeading: () => _t(translations.settings.language.subheading),
}