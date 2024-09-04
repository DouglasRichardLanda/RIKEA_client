import {PagesWrapperIndex, SellingItem} from "../shared";
import {useEffect, useState} from "react";
import door_fetcher from "./doors-fetcher.ts";
import {FaSpinner} from "react-icons/fa";

type Data = {
  name: string,
  description: string,
  key?: number
}

export default function Door() {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    door_fetcher().then(data => {
      data.length === 0 ? setData([]) : setData(data);
    })
  }, []);

  return (
    <PagesWrapperIndex>
      <div className={`flex flex-col gap-2`}>
        {data.length === 0 ? <div className={`flex w-full h-screen items-center justify-center`}>
          <FaSpinner className={`animate-spin text-5xl text-[var(--dark-brown)]`} />
        </div> : null}
        {data.map((el, i) => (
          <SellingItem
            key={i}
            name={el.name}
            description={el.description}/>
        ))}
      </div>
    </PagesWrapperIndex>
  )
}
