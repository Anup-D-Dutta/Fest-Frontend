import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero1'
import Footer from '../components/Footer'
import Event from '../components/Event'
import Countdown from '../components/Countdown'
import { Cat } from 'lucide-react'


const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Countdown />
      <Event />
      <Cat />
      <Footer />
    </div>
  )
}

export default Home
