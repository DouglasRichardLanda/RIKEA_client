import {BsThreeDotsVertical} from "react-icons/bs";
import * as React from "react";

type SellingItem = {
  title: string,
  image: string,
  price: number,
  key: number,
  description: string,
  mark?: () => void
}

export default function SellingItem (props: SellingItem) {

  const tool_bar_option = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <div className={`bg-gray-100 py-3 pl-3 shadow-md shadow-gray-400 flex duration-200 cursor-pointer gap-2`}>
      <div className={`w-[20%]`}>
        <img src={props.image} className={`object-cover h-40 w-full`} alt="Picture of an Item"/>
      </div>
      <div className={`w-[77%] flex flex-col`}>
        <h3 className={`font-bold text-lg`}>{props.title}</h3>
        <p className={`flex-grow`}>{props.description}</p>
        <h3 className={`font-bold`}>{props.price} £</h3>
      </div>
      <div
        onClick={tool_bar_option}
        className={`w-[3%] cursor-pointer`}>
        <BsThreeDotsVertical className={`text-2xl`} />
      </div>
    </div>
  )
}