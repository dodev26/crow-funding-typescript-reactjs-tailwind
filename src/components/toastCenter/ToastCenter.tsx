import { useMemo } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "~/hooks/hooks";
import { RootState } from "~/store/configureStore";


export const ToastCenter = () => {

  const { theme: ThemeState } = useAppSelector((state: RootState) => state.theme)
  const isTheme = useMemo(() => ThemeState === 'dark' ? 'dark' : 'light', [ThemeState])
  return <ToastContainer theme={isTheme} bodyClassName="font-primary text-sm" />
}