
import { useCallback, useState } from "react"
export default function useToggle(initialValue: boolean): [boolean, (b?: boolean) => void] {
  const [value, setValue] = useState(initialValue)
  const toggle = useCallback((b?: boolean) => {
    if (typeof b === "boolean") {
      setValue(b)
    } else {
      setValue(v => !v)
    }

  }, [])
  return [value, toggle]
}