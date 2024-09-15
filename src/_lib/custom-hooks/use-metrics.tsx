import {useEffect} from "react";

export default function useMetrics(file_name: string) {
  useEffect(() => {
    console.log("::Mounted    ", file_name)
    return () => {
      console.log("::Unmounted    ", file_name)
    }
  })
}