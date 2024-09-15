import {Route, Routes} from "react-router-dom";
import MainBoard from "../pages/main-board/main-board.tsx";
import {ErrorPages} from "../global-elements/errors/error.tsx";
import MainLayout from "../global-elements/layouts/main-layout.tsx";

export default function MainRouting() {
  return ( 
    <Routes>
      <Route path={`/`} element={<MainLayout />}>
        <Route index element={<MainBoard />} />
        <Route path={`*`} element={<ErrorPages />} />
      </Route>
    </Routes>
  )
}

