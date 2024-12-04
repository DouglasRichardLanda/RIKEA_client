import {MdOutlineEventAvailable} from "react-icons/md";
import {FaTextHeight, FaTextWidth} from "react-icons/fa";
import {BiLandscape} from "react-icons/bi";
import {Link} from "react-router-dom";

interface MainBoardSectionInterface {
  children: React.ReactNode,
  name: string,
  description: string,
  price: number,
  available: number,
  width: number,
  length: number,
  origin: string,
  link: string
}


export default function MainBoardSection(props: MainBoardSectionInterface) {


  return (
    <Link to={props.link} className={`w-full col-span-1 shadow-xl max-w-[700px]`}>
      {props.children}
      <div className={`p-5`}>
        <div className={`flex flex-col gap-1 my-5`}>
          <h3 className={`text-3xl font-bold`}>{props.name}</h3>
          <p className={`text-gray tracking-wider text-lg`}>{props.description}</p>
          <p className={`font-bold text-2xl`}>{props.price} £</p>
        </div>
        <div className={`flex mt-10 justify-between`}>
          <div>
            <p><MdOutlineEventAvailable className={`w-7 h-7 text-gray`} /></p>
            <p className={`text-xl font-bold`}>{props.available} Units</p>
          </div>
          <div>
            <p><FaTextWidth className={`w-7 h-7 text-gray`} /></p>
            <p className={`text-xl font-bold`}>{props.width} cm</p>
          </div>
          <div>
            <p><FaTextHeight className={`w-7 h-7 text-gray`} /></p>
            <p className={`text-xl font-bold`}>{props.length} cm</p>
          </div>
          <div>
            <p><BiLandscape className={`w-7 h-7 text-gray`} /></p>
            <p className={`text-xl font-bold`}>{props.origin}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}