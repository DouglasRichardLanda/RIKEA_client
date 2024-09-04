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

  const onSubmit = async (e:   React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("http://localhost:4000/doors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ensure this matches what your server expects
      },
      body: JSON.stringify(data),
    })
  }

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
        <form onSubmit={onSubmit} className={`bg-gray-500 p-2 flex gap-2`}>
          <input name={"name"} type="text" placeholder={"Name"} className={`p-2 rounded`}/>
          <input name={"description"} type="text" placeholder={"Description"} className={`p-2 rounded`}/>
          <input name={"price"} type="number" placeholder={"Price"} className={`p-2 rounded`}/>
          <button type={"submit"} className={`bg-white hover:bg-blue-500 duration-200 p-1 rounded`}>Submit</button>
        </form>
        <Outlet/>
      </div>
    </div>
  )
}