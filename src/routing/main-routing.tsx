import {Route, Routes} from "react-router-dom";
import {ErrorPages} from "../global-elements/errors/error.tsx";
import {IndoorPage, MainBoardPage, MaterialsPage, OutdoorPage} from "../pages";
import MainLayout from "../global-elements/layouts/main-layout.tsx";



export default function MainRouting() {

  return (
    <Routes>
      <Route path={`/`} element={<MainLayout />}>
        <Route index element={<MainBoardPage />} />
        <Route path={'materials'} element={<MaterialsPage />} />
        <Route path={'indoor'} element={<IndoorPage />} />
        <Route path={'outdoor'} element={<OutdoorPage />} />

        <Route path={`*`} element={<ErrorPages />} />
      </Route>
    </Routes>
  )
}

