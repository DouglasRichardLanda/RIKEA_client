import {TbFaceIdError} from "react-icons/tb";
import {Link} from "react-router-dom"


export default function NoExist () {

  return (
    <div className={`w-full h-[60vh] flex justify-center items-center flex-col gap-5`}>
      <p className={`text-9xl flex`}><span>OUch...</span><TbFaceIdError className={`inline ml-20`} /></p>
      <p className={`text-3xl`}>This page seems to be inactive or doesn't exist</p>
      <Link to={`/`} className={`text-3xl underline text-custom-medium`}>See our available products...</Link>
    </div>
  )
}