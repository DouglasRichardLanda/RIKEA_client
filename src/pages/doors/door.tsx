import {PagesWrapperIndex, SellingItemDoor} from "../shared";
import {useEffect, useState} from "react";
import door_fetcher from "./doors-fetcher.ts";
import {FaSpinner} from "react-icons/fa";

type Data = {
  isbn: string,
  name: string,
}

export default function Door() {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    door_fetcher().then(data => {
      setData(data)
    })
  }, []);

  return (
    <PagesWrapperIndex>
      <div className={`flex flex-col gap-2`}>
        {data.length === 0 ? <div className={`flex w-full h-screen items-center justify-center`}>
          <FaSpinner className={`animate-spin text-5xl text-[var(--dark-brown)]`} />
        </div> : null}
        {data.map((el, i) => (
          <SellingItemDoor
            key={i}
            isbn={el.isbn}
            name={el.name}
          />
        ))}
      </div>
    </PagesWrapperIndex>
  )
}