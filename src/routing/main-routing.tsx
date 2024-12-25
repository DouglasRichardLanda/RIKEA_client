import {Route, Routes} from "react-router-dom";
import {IndoorPage, MainBoardPage, MaterialsPage, OutdoorPage} from "../pages";
import MainLayout from "../global-elements/layouts/main-layout.tsx";
import NoExist from "../pages/doesnt-exist/NoExist.tsx";
import Payment from "../pages/payment/Payment.tsx";



export default function MainRouting() {

  return (
    <Routes>
      <Route path={`/`} element={<MainLayout />}>
        <Route index element={<MainBoardPage />} />
        <Route path={'materials'} element={<MaterialsPage />} />
        <Route path={'indoor'} element={<IndoorPage />} />
        <Route path={'outdoor'} element={<OutdoorPage />} />
        <Route path={`payment`} element={<Payment />} />

        <Route path={`*`} element={<NoExist />} />
      </Route>
    </Routes>
  )
}

