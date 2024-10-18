import {merge} from "../../_lib";
import MenuContentElement from "./menu-content.tsx";

type MenuElementType = {
  open: boolean
}

export default function MenuElement (props: MenuElementType) {

  return (
    <div className={merge(`fixed left-0 w-full z-40 bg-custom-bright px-20 pb-10 pt-5 border-b-2 border-b-custom-medium duration-200`, props.open ? "top-12" : "top-[-100%]")}>
      <MenuContentElement />
    </div>
  )
}