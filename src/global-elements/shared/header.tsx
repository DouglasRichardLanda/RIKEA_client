import {merge} from "../../_lib";
import {Link} from "react-router-dom";
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa6";


export default function HeaderElement(props: {className: string}) {

  return (
    <header className={merge(`bg-custom-dark sm:flex justify-center sm:justify-between items-center sm:items-center px-5`, props.className)}>
      <nav className={`space-x-5 tracking-wider text-lg`}>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}>Indoor</Link>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}>Outdoor</Link>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}>Materials</Link>
      </nav>

      <div className={`flex gap-5 items-center`}>
        <span className={`font-bold tracking-widest`}>RIKEA</span>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}><FaFacebookF /></Link>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}><FaTwitter /></Link>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}><FaLinkedinIn /></Link>
      </div>
    </header>
  )
}