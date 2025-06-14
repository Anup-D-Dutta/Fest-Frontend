import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import DashBoardPage from "../pages/DashBoardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Event from "../components/Event";
import About from "../pages/AboutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<HomePage />} />
      <Route path='events' element={<Event />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='dashboard' element={<DashBoardPage />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)

export default router;