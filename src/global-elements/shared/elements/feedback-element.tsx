import {IoMdStar} from "react-icons/io";


export default function FeedbackElement ({name, text, path}: {name: string, text: string, path: string}) {

  return (
    <div className={`max-w-[400px] flex flex-col items-center shadow-md p-5 relative`}>
      <img src={path} alt="" className={`rounded-full h-[200px] w-[200px] object-cover`} />
      <div className={`flex flex-col gap-3 items-center mt-5`}>
        <p className={`font-bold text-2xl`}>{name}</p>
        <p className={`text-sm tracking-wider`}>{text}</p>
      </div>
      <div className={`absolute top-5 left-5 flex`}>
        <IoMdStar className={`w-5 h-5`} />
        <IoMdStar className={`w-5 h-5`} />
        <IoMdStar className={`w-5 h-5`} />
        <IoMdStar className={`w-5 h-5`} />
        <IoMdStar className={`w-5 h-5`} />
      </div>
    </div>
  )
}