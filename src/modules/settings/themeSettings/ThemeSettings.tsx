import { Switch } from "@headlessui/react"
import { useLayoutEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { FormGroup } from "~/components/FormGroup/FormGroup"
import { Heading } from "~/components/heading/Heading"
import { IconDark } from "~/components/icons/IconDark/IconDark"
import IconLight from "~/components/icons/IconLight"
import useTheme from "~/hooks/useTheme"
import { lang } from "./lang"


interface IThemeSettingsProps {
  className?: string
}

type FormData = {
  theme: 'light' | 'dark'
}
export const ThemeSettings = ({ className }: IThemeSettingsProps) => {
  const [enabled, setEnabled] = useState(false)
  const { t } = useTranslation();
  const { changeTheme, theme } = useTheme()
  const { control, reset } = useForm<FormData>({
    defaultValues: {
      theme: 'light'
    }
  })

  const isDark = theme === 'dark'

  useLayoutEffect(() => {
    if (theme === 'dark') {
      setEnabled(true)
      reset({ theme: 'dark' })
    } else {
      setEnabled(false)
      reset({ theme: 'light' })
    }
  }, [])


  return <form className={className}>
    <Heading as="h2" className="text-base font-bold">{t(lang.heading())}</Heading>
    <p className="text-xs text-text3 mt-[5px]">{t(lang.subHeading())}</p>
    <FormGroup className="max-w-full md:max-w-[70%] lg:max-w-[50%] mt-5">
      <Controller
        name="theme"
        control={control}
        render={({ field: {
          onChange,
          value,
        } }) => (
          <Switch
            value={value}
            checked={enabled}
            onChange={(b) => {
              setEnabled(b)
              onChange(b ? "dark" : "light")
              changeTheme(b ? "dark" : "light")
            }}
            className={`${isDark ? 'bg-secondary' : 'bg-primary'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${isDark ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none flex text-text3 items-center justify-center  h-[34px] w-[34px] transform rounded-full bg-white dark:bg-darkSoft shadow-lg ring-0 transition duration-200 ease-in-out`}
            >
              {isDark ? <IconDark /> : <IconLight />}
            </span>
          </Switch>
        )}
      />
    </FormGroup>
  </form>
}