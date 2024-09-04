import {PagesWrapperIndex, SellingItemWindow} from "../shared";
import {useState} from "react";
import samplesData from "./samples-data.ts";

type Window = {
  isbn: string,
  name: string
}

export default function Window () {
  const [data, setData] = useState<Window[]>([])

  return (
    <PagesWrapperIndex>
      <div className={`flex flex-col gap-2`}>
        {samplesData.map((el, i) => (
          <SellingItemWindow />
        ))}
      </div>
    </PagesWrapperIndex>
  )
}