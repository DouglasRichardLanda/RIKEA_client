import {Route, Routes} from "react-router-dom";
import {ErrorPages} from "../global-elements/errors/error.tsx";
import {MainLayout} from "../global-elements/layouts";
import {IndoorPage, MainBoardPage, MaterialsPage, OutdoorPage} from "../pages";



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

