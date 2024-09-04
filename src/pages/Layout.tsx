import * as React from "react";
import {Outlet} from "react-router-dom";
import Navigation from "./navigation/navigation.tsx";

type MainLayout = {
  children?: React.ReactNode
}

export default function MainLayout () {

  return (
    <div className={`pl-80`}>
     <Navigation />
      <Outlet />
    </div>
  )
}