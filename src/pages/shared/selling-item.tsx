import {BsThreeDotsVertical} from "react-icons/bs";
import * as React from "react";

type SellingItem = {
  key?: number,
  name: string,
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
        <img src={"./example.jpg"} className={`object-cover h-40 w-full shadow-md shadow-black`} alt="Picture of an Item"/>
      </div>
      <div className={`w-[77%] flex flex-col`}>
        <h3 className={`font-bold text-lg`}>{props.name}</h3>
        <p className={`flex-grow`}>{props.description}</p>
        <div className={`flex justify-between`}>
          {/*<h3 className={`font-bold`}>{props.price} £</h3>*/}
          <button className={`px-5 border-[1px] border-black shadow-md shadow-gray-500 uppercase hover:bg-blue-500 duration-200`}>Open</button>
        </div>
      </div>
      <div
        onClick={tool_bar_option}
        className={`w-[3%] cursor-pointer`}>
        <BsThreeDotsVertical className={`text-2xl`} />
      </div>
    </div>
  )
}