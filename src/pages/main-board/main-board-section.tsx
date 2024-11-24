import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Link} from "react-router-dom";
import merge from "../../_lib/merge.ts";

type SubElement = {
  name: string,
  link: string,
  availableNumbers: number
}

type MainBoardSectionType = {
  h3: string,
  image: string,
  availableItems: number,
  swap: boolean,
  text: string | React.ReactNode,
  subElements4: SubElement[]
}

export default function MainBoardSection(props: MainBoardSectionType) {

  const {ref, inView} = useInView({
    triggerOnce: true, // Ensures animation is only triggered once when entering the viewport
    threshold: 0.1, // Percentage of the element that must be visible (0.1 = 10%)
  });


  return (
    <>
      <motion.div
        initial={props.swap ? {x: '-250px', opacity: 0} : {
          x: '+250px',
          opacity: 0
        }}
        animate={inView ? {x: 0, opacity: 1} : {}}
        transition={{duration: 0.7}}
        ref={ref}
        className={merge(`flex h-80 w-full gap-5 my-5`, props.swap ? "flex-row-reverse" : " ")}>
        <div style={{backgroundImage: `url("${props.image}")`}} className={`bg-cover bg-center w-1/2`}>
          <div className={`flex w-full h-full justify-center items-center bg-custom-dark/70 text-custom-bright`}>
            <h3 className={`text-2xl tracking-widest font-bold uppercase`}>{props.h3}</h3>
          </div>
        </div>
        <div className={`w-1/2 flex flex-col justify-between py-5`}>
          <div>
            <h3 className={`text-2xl tracking-wider font-bold capitalize mb-5`}>{props.h3}</h3>
            <p className={`tracking-wider`}>{props.text}</p>
          </div>
          <div className={`flex justify-between items-center`}>
            <p className={`text-3xl font-bold`}>Over: 1000+ Offers</p>
            <button className={`uppercase tracking-widest px-10 py-3 bg-red text-custom-bright`}>discover</button>
          </div>
        </div>
      </motion.div>
      <div
        className={`mb-40 flex w-full justify-between gap-1`}>
        {props.subElements4.map((el, i) => {
          let duration = props.swap ? 0.7 : 1;
          return (
            <motion.div
              initial={{opacity: 0, y: "-20px"}}
              animate={inView ? {opacity: 1, y: 0} : {opacity: 0}}
              transition={props.swap ? {duration: duration + i/10} : {duration: duration + i/10}}
              ref={ref}
              key={i}
              className={`h-20 bg-custom-dark text-custom-bright w-full flex justify-center flex-col gap-5`}>
              <Link to={el.link} className={`self-center justify-self-center text-xl tracking-widest`}>{el.name}</Link>
              <div className={`self-end flex w-full justify-center`}>
                <p className={`font-bold`}>Over: 2000+ Offers</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}