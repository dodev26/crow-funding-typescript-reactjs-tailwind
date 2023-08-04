import { useEffect, useRef } from "react";

export default function useOnClickOutside(excludedElement: any, onClickOutSide: () => void) {
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    function handleOnClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target) && excludedElement !== event.target) {
        onClickOutSide();
      }
    }
    document.addEventListener("mousedown", handleOnClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleOnClickOutside);
    }
  }, [])
  return ref;
}