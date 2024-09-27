import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

type ElementH2SectionType = {
  children: string | React.ReactNode
}

export default function ElementH2Section (props: ElementH2SectionType) {

  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation is only triggered once when entering the viewport
    threshold: 0.1, // Percentage of the element that must be visible (0.1 = 10%)
  });

  return <motion.h2
    initial={{ y: '-50px', opacity: 0 }} // Initial position before entering the viewport
    animate={inView ? { y: 0, opacity: 1 } : {}} // Animate when the element is in view
    transition={{ duration: 0.7 }}
    ref={ref}
    className={`text-center text-2xl text-gray/90 tracking-widest uppercase font-bold my-10`}>{props.children}</motion.h2>
}