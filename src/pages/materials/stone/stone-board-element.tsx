
interface StoneBoardElement {
  stoneName: string,
  imgPath: string,
  linkStone: string
}

export default function StoneBoardElement (props: StoneBoardElement) {

  return (
    <div className={`h-[50vh] w-full bg-cover shadow-2xl group min-w-[400px] cursor-pointer`} style={{backgroundImage: `url("${props.imgPath}")`}}>
      <div className={`bg-black/50 h-full text-custom-medium flex justify-center items-center group-hover:bg-gray/50 duration-200`}>
        <h3 className={`font-bold text-5xl group-hover:text-black duration-200 text-center text-gray-light`}>{props.stoneName}</h3>
      </div>
    </div>
  )
}