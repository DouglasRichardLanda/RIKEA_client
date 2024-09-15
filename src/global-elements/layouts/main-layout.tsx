import * as React from "react";
import {Outlet} from "react-router-dom";

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
        <Outlet/>
    </div>
  )
}