import {Outlet} from "react-router-dom";
import HeaderElement from "../shared/header/header.tsx";
import Footer from "../shared/footer/footer.tsx";


export default function MainLayout() {


  return (
    <div className={`pt-12`}>
      <HeaderElement className={`fixed top-0 z-50 w-full h-20 sm:h-12 text-custom-bright`} />

      <Outlet />

      <Footer className={`bg-custom-dark text-custom-bright z-50 p-20`} />
    </div>
  )
}