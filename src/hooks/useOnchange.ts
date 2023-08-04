import { useState } from "react";


export default function useOnChange(timeDelay?: number) {
  const [value, setValue] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof timeDelay === 'number') {
      setTimeout(() => {
        setValue(e.target.value)
      }, timeDelay)
    }
    else {
      setValue(e.target.value)
    }
  }
  return [value, onChange]
}