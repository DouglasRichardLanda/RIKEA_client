import {Route, Routes} from "react-router-dom";
import {ErrorPages} from "../global-elements/errors/error.tsx";
import {MainLayout} from "../global-elements/layouts";
import {MainBoardPage} from "../pages";



export default function MainRouting() {

  return (
    <Routes>
      <Route path={`/`} element={<MainLayout />}>
        <Route index element={<MainBoardPage />} />

        <Route path={`*`} element={<ErrorPages />} />
      </Route>
    </Routes>
  )
}

