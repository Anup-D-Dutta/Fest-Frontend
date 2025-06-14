import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DashBoard from './pages/DashBoardPage.jsx'
import router from './router/index.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <DashBoard/> */}
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
