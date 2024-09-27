import {merge} from "../../_lib";
import {Link} from "react-router-dom";
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa6";


export default function HeaderElement(props: {className: string}) {

  return (
    <header className={merge(`bg-custom-dark sm:flex justify-center sm:justify-between items-center sm:items-center px-5`, props.className)}>
      <nav className={`tracking-wider text-lg flex gap-5 items-center`}>
        <img src="/logo-no-background.svg" alt="Logo of the RIKEA" className={`w-40`}/>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}>Indoor</Link>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}>Outdoor</Link>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}>Materials</Link>
      </nav>

      <div className={`flex gap-5 items-center`}>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}><FaFacebookF /></Link>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}><FaTwitter /></Link>
        <Link to={`#`} className={`hover:text-custom-medium duration-200`}><FaLinkedinIn /></Link>
      </div>
    </header>
  )
}