import {Link} from "react-router-dom";

const local_style = [
  "duration-200 hover:text-custom-medium text-lg"
]
export default function MenuContentElement () {

  return (
    <div className={`flex gap-20`}>
      <div className={`flex flex-col gap-2`}>
        <H3Local>Bathroom</H3Local>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
      </div>
      <div className={`flex flex-col gap-2`}>
        <H3Local>Kitchen</H3Local>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
      </div>
      <div className={`flex flex-col gap-2`}>
        <H3Local>Section</H3Local>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
      </div>
      <div className={`flex flex-col gap-2`}>
        <H3Local>Section</H3Local>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
        <Link className={local_style[0]} to={`#`}>Element</Link>
      </div>
    </div>
  )
}

type H3LocalType = { children: string }

export function H3Local(props: H3LocalType) {
  return <h3 className={`uppercase text-2xl tracking-wider font-bold text-custom-dark mb-5`}>{props.children}</h3>
}