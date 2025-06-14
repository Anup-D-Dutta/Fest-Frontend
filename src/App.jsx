import { useState, useEffect } from 'react';
import AnimationBg from './components/AnimationBg';
import './components/Countdown.css'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const eventDate = new Date('2025-08-15T00:00:00').getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      {/* <AnimationBg /> */}
      <NavBar />
      {/* <HomePage /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;