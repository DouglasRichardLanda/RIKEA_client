import {merge} from "../../../_lib";
import {Link} from "react-router-dom";
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa6";
import MenuElement from "./menu.tsx";
import React, {MouseEvent, useRef} from "react";


export default function HeaderElement(props: { className: string }) {

  const menuRef = React.useRef(null)
  const [open, setOpen] = React.useState<boolean>(false)
  const open_event = () => {
    setOpen(true)
  }

  React.useEffect(() => {
    // event to close menu by clicking somewhere else


    return () => {}
  }, [])
  return (
    <>
      <header
        ref={menuRef}
        className={merge(`bg-custom-dark sm:flex justify-center sm:justify-between items-center sm:items-center px-5`, props.className)}>
        <nav className={`tracking-wider text-lg flex gap-5 items-center`}>
          <Link to={`/`}><img src="/logo-no-background.svg" alt="Logo of the RIKEA" className={`w-40`}/></Link>
          <div onClick={open_event} className={`hover:text-custom-medium duration-200 cursor-pointer`}>Indoor</div>
          <div onClick={open_event} className={`hover:text-custom-medium duration-200 cursor-pointer`}>Outdoor</div>
          <div onClick={open_event} className={`hover:text-custom-medium duration-200 cursor-pointer`}>Materials</div>
        </nav>


        <div className={`flex gap-5 items-center`}>
          <Link to={`#`} className={`hover:text-custom-medium duration-200`}><FaFacebookF/></Link>
          <Link to={`#`} className={`hover:text-custom-medium duration-200`}><FaTwitter/></Link>
          <Link to={`#`} className={`hover:text-custom-medium duration-200`}><FaLinkedinIn/></Link>
        </div>
      </header>

      <MenuElement open={open} />
    </>
  )
}