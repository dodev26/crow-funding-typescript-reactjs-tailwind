import { useTranslation } from "react-i18next"
import { Heading } from "~/components/heading/Heading"
import { lang } from "./lang"
import SelectLanguage from "~/components/selectLanguage"


interface ILangSettingsProps {
  className?: string
}

export const LangSettings = ({ className }: ILangSettingsProps) => {
  const { t } = useTranslation()


  return <div className={className}>
    <Heading as="h2" className="text-base font-bold">{t(lang.heading())}</Heading>
    <p className="text-xs text-text3 mt-[5px]">{t(lang.subHeading())}</p>
    <SelectLanguage className="max-w-full md:max-w-[70%] lg:max-w-[50%] mt-5" />
  </div>
}