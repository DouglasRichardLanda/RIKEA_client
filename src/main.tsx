import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './routing.tsx'
import './styles/index.css'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </StrictMode>,
)
