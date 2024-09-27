import {useEffect, useState} from "react";


export default function useAvailableRandomItems (diaposon: number) {
  const [state, setState] = useState<number>(0)

  if (diaposon <= 0) {
    return 0
  }

  useEffect(() => {
    setState(Math.ceil(Math.random() * diaposon))
  }, [])


  return state
}