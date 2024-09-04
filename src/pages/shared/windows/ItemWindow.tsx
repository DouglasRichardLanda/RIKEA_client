import {BsThreeDotsVertical} from "react-icons/bs";


type ItemWindowType = {
  isbn: string,
  name: string
}
export default function ItemWindow (props: ItemWindowType) {

  return (
    <div className={`bg-gray-100 py-3 pl-3 shadow-md shadow-gray-400 flex duration-200 cursor-pointer gap-2`}>
      <div className={`w-[20%]`}>
        <img src={"./"} className={`object-cover h-40 w-full`} alt="Picture of an Item"/>
      </div>
      <div className={`w-[77%] flex flex-col`}>
        <h3 className={`font-bold text-lg`}>{props.isbn}</h3>
        <p className={`flex-grow`}>{props.name}</p>
        <h3 className={`font-bold`}>{props.isbn} £</h3>
      </div>
      <div
        // onClick={tool_bar_option}
        className={`w-[3%] cursor-pointer`}>
        <BsThreeDotsVertical className={`text-2xl`}/>
      </div>
    </div>
  )
}



































