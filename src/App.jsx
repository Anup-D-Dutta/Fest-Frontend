import { useState, useEffect } from 'react';
import { Music, Zap, Trophy, Palette, Users, Gamepad2, Calendar, MapPin, Clock, Star, ChevronRight, Menu, X, Home } from 'lucide-react';
import AnimationBg from './components/AnimationBg';
import Countdown from './components/Countdown';
import Event from './components/Event';
import './components/Countdown.css'
import RegisterHeader from './components/RegisterHeader';
import Footer from './components/Footer';
import Cta from './components/Cta';
import Register from './components/Register';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage'

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 45
  });
  const [scrollY, setScrollY] = useState(0);
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    events: [],
    accommodation: false,
    tshirtSize: 'M'
  });
  const [currentStep, setCurrentStep] = useState(1);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const eventDate = new Date('2025-08-15T00:00:00').getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
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
      <AnimationBg />


      {/* Hero Section */}
      <HomePage />

      
      {/* Countdown Section */}

      <Countdown />

      {/* Events Section */}
      <Event />

      {/* CTA Section */}
      <Cta />


    </div>
  );
};

export default App;