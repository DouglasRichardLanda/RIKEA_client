import {Route, Routes} from "react-router-dom";
import MainBoard from "./pages/main-board/main-board.tsx";
import {ErrorPages} from "./global-elements/error.tsx";
import MainLayout from "./pages/Layout.tsx";
import Window from "./pages/windows/window.tsx";
import Door from "./pages/doors/door.tsx";
import Color from "./pages/colors/color.tsx";
import Fence from "./pages/fences/fence.tsx";

export default function Routing() {
  return ( 
    <Routes>
      <Route path={`/`} element={<MainLayout />}>
        <Route index element={<MainBoard />} />
        <Route path={`windows`} element={<Window />} />
        <Route path={`doors`} element={<Door />} />
        <Route path={`colors`} element={<Color />} />
        <Route path={`fences`} element={<Fence />} />
        <Route path={`*`} element={<ErrorPages />} />
      </Route>
    </Routes>
  )
}

