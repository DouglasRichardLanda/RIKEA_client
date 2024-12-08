import {createRoot} from 'react-dom/client'
import MainRouting from './routing/main-routing.tsx'
import {BrowserRouter} from "react-router-dom";

import './styles/index.css'
import ScrollToTop from "./global-elements/layouts/scroll-to-top.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
    <MainRouting/>
  </BrowserRouter>
)
