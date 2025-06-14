import React from 'react'
import App from '../App';
import { Contact, Home } from 'lucide-react';
import Schedule from '../components/Schedule';
import Event from '../components/Event';
import Ticket from '../components/Ticket';
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Register1 from '../components/Register1';
import DashBoardPage from '../pages/DashBoardPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<HomePage />} />
      <Route path='events' element={<Event />} />
      <Route path='schedule' element={<Schedule />} />
      <Route path='tickets' element={<Ticket />} />
      <Route path='contact' element={<Contact />} />
      <Route path='register' element={<Register1 />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='dashboard' element={<DashBoardPage />} />
    </Route>
  )
)

export default router;