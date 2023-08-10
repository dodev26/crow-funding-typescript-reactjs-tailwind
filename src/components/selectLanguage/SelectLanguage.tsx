import { Controller, useForm } from "react-hook-form"
import { FormGroup } from "../FormGroup/FormGroup"
import Dropdown from "../dropdown"
import { Option } from "~/types"
import { langKey } from "~/locales/i18n"
import { useTranslation } from "react-i18next"
import classNames from "classnames"


const LANGUAGES: Option<langKey>[] = [{
  value: "en",
  label: "English"
}, {
  value: "vi",
  label: "Vietnamese"
}]

interface ISelectLanguage {
  className?: string,
  type?: "primary" | "secondary"
}
export const SelectLanguage = ({ className, type = "primary" }: ISelectLanguage) => {
  const { i18n } = useTranslation()
  const { control } = useForm()

  const handleChangeLanguage = (lang: langKey) => {
    i18n.changeLanguage(lang)
  }

  const selected = (type === "primary" && LANGUAGES.find((lang) => lang.value === i18n.language) ? LANGUAGES.find((lang) => lang.value === i18n.language)?.label : LANGUAGES.find((lang) => lang.value === i18n.language)?.value) as string



  return <form className={classNames(className)}>
    <FormGroup className={
      classNames("max-w-full", {
        "h-full": type === "secondary"
      })
    }>
      <Controller
        name="lang"
        control={control}
        render={({ field: { onChange, value } }) => <Dropdown hideError>
          <Dropdown.Select
            selected={selected}
            type={type}
            placeholder={"Select category"}
          ></Dropdown.Select>
          <Dropdown.List>
            {LANGUAGES.map((lang) => (
              <Dropdown.Option onClick={() => {
                onChange(lang.value)
                handleChangeLanguage(lang.value)
              }} key={lang.value}>
                <span className={classNames("capitalize", {
                  "text-primary": lang.value === value
                })}>{type === "primary" ? lang.label : lang.value}</span>
              </Dropdown.Option>
            ))}
          </Dropdown.List>
        </Dropdown>}
      />
    </FormGroup>

  </form>
}