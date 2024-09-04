import * as React from "react";
import {Outlet} from "react-router-dom";
import Navigation from "./navigation/navigation.tsx";
import {FaFilter} from "react-icons/fa";
import {IoIosNotifications} from "react-icons/io";
import {RiAccountPinCircleFill} from "react-icons/ri";

type MainLayout = {
  children?: React.ReactNode
}

export default function MainLayout() {

  return (
    <div className={`pl-60`}>
      <Navigation/>
      <div>
        <div className={`bg-[var(--dark-green)] text-white p-5 flex justify-between`}>
          <div className={`flex items-center gap-5`}>
            <input placeholder={`Search`} className={`py-1 px-3 text-black rounded-2xl bg-gray-100`}/>
            <p><FaFilter/></p>
          </div>
          <div className={`flex items-center gap-3`}>
            <p className={`text-xl`}><IoIosNotifications/></p>
            <p className={`text-xl`}><RiAccountPinCircleFill/></p>
            <p>Logout</p>
          </div>
        </div>
        <Outlet/>
      </div>
    </div>
  )
}