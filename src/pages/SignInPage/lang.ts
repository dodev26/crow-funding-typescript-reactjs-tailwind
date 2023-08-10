import { translations } from "~/locales/translation";
import { _t } from "~/utils/lang";


export const lang = {
  heading: () => _t(translations.signIn.heading),
  signUp: () => _t(translations.signUp.signUp),
  dontHaveAccount: () => _t(translations.signIn.dontHaveAccount),
  signInWithGG: () => _t(translations.signIn.signInWithGG),
  email: () => _t(translations.signIn.email),
  password: () => _t(translations.signIn.password),
  signIn: () => _t(translations.signIn.submit),
  pEmail: () => _t(translations.signIn.pEmail),
  pPassword: () => _t(translations.signIn.pPassword),
  forgotPassword: () => _t(translations.signIn.forgotPassword),
  submit: () => _t(translations.signIn.submit),
}