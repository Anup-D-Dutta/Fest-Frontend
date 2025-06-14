import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Event from '../components/Event'
import Countdown from '../components/Countdown'
import { Cat } from 'lucide-react'
import { Outlet } from 'react-router-dom'


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Countdown />
      <Event />
      <Cat />
      {/* <Outlet /> */}
      <Footer />
    </div>
  )
}

export default HomePage
