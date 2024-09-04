import {PagesWrapperIndex, SellingItemIndex} from "../shared";
import {useEffect, useState} from "react";
import door_fetcher from "./doors-fetcher.ts";
import {FaSpinner} from "react-icons/fa";

type Data = {
  id: number,
  description: string,
  title: string,
  price: number,
  image: string
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
        {data.length === 0 ? <div className={`flex w-full h-screen items-center justify-center`}><FaSpinner className={`animate-spin text-5xl text-[var(--dark-brown)]`} /></div> : null}
        {data.map((el, i) => (
          <SellingItemIndex
            key={i}
            title={el.title}
            description={el.description}
            price={el.price}
            image={`data:image/jpeg;base64,${el.image}`}
          />
        ))}
      </div>
    </PagesWrapperIndex>
  )
}