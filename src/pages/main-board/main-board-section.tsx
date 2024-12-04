import {MdOutlineEventAvailable} from "react-icons/md";
import {FaTextHeight, FaTextWidth} from "react-icons/fa";
import {BiLandscape} from "react-icons/bi";

interface MainBoardSectionInterface {
  children: React.ReactNode,
  name: string,
  description: string,
  price: number,
  available: number,
  width: number,
  length: number,
  origin: string
}


export default function MainBoardSection(props: MainBoardSectionInterface) {


  return (
    <div>
      {props.children}
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <div>
          <div>
            <p><MdOutlineEventAvailable /></p>
            <p></p>
            <p></p>
          </div>
          <div>
            <p><FaTextWidth /></p>
            <p></p>
            <p></p>
          </div>
          <div>
            <p><FaTextHeight /></p>
            <p></p>
            <p></p>
          </div>
          <div>
            <p><BiLandscape /></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}