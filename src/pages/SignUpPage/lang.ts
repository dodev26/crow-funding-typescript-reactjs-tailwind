import { translations } from "~/locales/translation";
import { _t } from "~/utils/lang";


export const lang = {
  heading: () => _t(translations.signUp.heading),
  signIn: () => _t(translations.signIn.signIn),
  haveAccount: () => _t(translations.signUp.haveAccount),
  signInWithGG: () => _t(translations.signUp.signUpWithGG),
  or: () => _t(translations.signUp.or),
  firstName: () => _t(translations.signUp.firstName),
  pFirstName: () => _t(translations.signUp.pFirstName),
  lastName: () => _t(translations.signUp.lastName),
  pLastName: () => _t(translations.signUp.pLastName),
  email: () => _t(translations.signUp.email),
  pEmail: () => _t(translations.signUp.pEmail),
  phone: () => _t(translations.signUp.phone),
  pPhone: () => _t(translations.signUp.pPhone),
  dateOfBirth: () => _t(translations.signUp.dateOfBirth),
  password: () => _t(translations.signUp.password),
  pPassword: () => _t(translations.signUp.pPassword),
  confirmPassword: () => _t(translations.signUp.confirmPassword),
  pConfirmPassword: () => _t(translations.signUp.pConfirmPassword),
  submit: () => _t(translations.signUp.submit),
  question: () => _t(translations.signUp.question),
  tearmsOfUse: () => _t(translations.signUp.tearmsOfUse),
  privacyPolicy: () => _t(translations.signUp.privacyPolicy),

}