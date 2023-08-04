import { useAppDispatch, useAppSelector } from "./hooks";
import { RootState } from "~/store/configureStore";
import { ThemeKeyType } from "~/store/theme/types";
import { ChangeTheme } from "~/store/theme/themeSlice";
import { useEffect, useLayoutEffect } from "react";

export default function useTheme(): { theme: ThemeKeyType, changeTheme: (type: ThemeKeyType) => void } {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state: RootState) => state.theme);
  const saveTheme = (type: ThemeKeyType) => {
    localStorage.setItem('theme', JSON.stringify(type));
  }
  const changeTheme = (type: ThemeKeyType) => {
    dispatch(ChangeTheme(type))
    saveTheme(type);
  }

  useLayoutEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme])

  //check current theme
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme') as string) || 'light';
    if (theme) {
      dispatch(ChangeTheme((theme)));
    }
  }, [])

  return {
    theme,
    changeTheme
  }
}