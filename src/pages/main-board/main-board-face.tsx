import {useEffect, useState} from "react";
import merge from "../../_lib/merge.ts";

type MainBoardFaceType = {
  imagesUrl: string[]
}

export default function MainBoardFace(props: MainBoardFaceType) {

  const [actual, setActual] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActual(val => (val + 1) % props.imagesUrl.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`bg-custom-dark`}>
        <p style={{ width: 100 / props.imagesUrl.length + "%", marginLeft: 100 / props.imagesUrl.length * actual + "%" }} className={`border-2 border-custom-medium duration-1000`}></p>
      </div>

      <div className={`h-[90vh] relative overflow-x-hidden`}>
        <div className={merge(`h-full w-full flex flex-grow absolute`)}>
          {props.imagesUrl.map((url, i) => (
            <img style={{transform: `translateX(-${actual * 100}%)`}} key={i} src={url}
                 className={`object-cover object-center w-full h-full min-w-full block duration-1000`}
                 alt="image of the main board"/>
          ))}
        </div>
        <div
          className={`relative z-20 h-[90vh] bg-black/60 text-custom-bright flex justify-center items-center flex-col gap-5`}>
          <h1 className={`font-bold text-6xl tracking-widest`}>RIKE<span className={`text-custom-medium`}>A</span></h1>
          <p className={`tracking-wider text-2xl`}>Feels good - Feels like <span
            className={`text-custom-medium`}>home</span></p>
          <button onClick={() => {
            const footer = document.getElementById("footer");
            footer?.scrollIntoView({ behavior: 'smooth' })
          }} className={`uppercase tracking-widest px-10 py-3 bg-red`}>Contact</button>
        </div>
      </div>
    </>
  )
}