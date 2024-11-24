import {Outlet} from "react-router-dom";
import HeaderElement from "../shared/header/header.tsx";


export default function MainLayout() {


  return (
    <div className={`pt-12`}>
      <HeaderElement className={`fixed top-0 z-50 w-full h-20 sm:h-12 text-custom-bright`} />

      <Outlet />
    </div>
  )
}