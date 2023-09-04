import { translations } from "~/locales/translation";
import { _t } from "~/utils/lang";

export const lang = {
  heading: () => _t(translations.payment.heading),
  subheading: () => _t(translations.payment.subheading),
  paypalDesc: () => _t(translations.payment.paypalDesc),
  payoneerDesc: () => _t(translations.payment.payoneerDesc),
}