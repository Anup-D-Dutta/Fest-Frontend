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

  const events = [
    {
      icon: Music,
      title: "Music Competitions",
      description: "Battle of the Bands, Solo Singing, DJ Wars, and epic musical showdowns!",
      gradient: "from-pink-500 to-purple-600",
      delay: "delay-100",
      id: "music"
    },
    {
      icon: Users,
      title: "Dance Battles",
      description: "Hip-hop, Contemporary, Folk, and Fusion dance competitions!",
      gradient: "from-blue-500 to-cyan-500",
      delay: "delay-200",
      id: "dance"
    },
    {
      icon: Zap,
      title: "Tech Events",
      description: "Hackathons, Coding Competitions, AI Challenges, and Innovation!",
      gradient: "from-yellow-400 to-orange-500",
      delay: "delay-300",
      id: "tech"
    },
    {
      icon: Palette,
      title: "Arts & Drama",
      description: "Theater, Stand-up Comedy, Art exhibitions, and Creative showcases!",
      gradient: "from-green-400 to-emerald-600",
      delay: "delay-400",
      id: "arts"
    },
    {
      icon: Trophy,
      title: "Sports Arena",
      description: "Cricket, Football, Basketball tournaments and sports competitions!",
      gradient: "from-red-500 to-pink-600",
      delay: "delay-500",
      id: "sports"
    },
    {
      icon: Gamepad2,
      title: "Gaming Zone",
      description: "Esports tournaments, Gaming competitions, and endless fun!",
      gradient: "from-indigo-500 to-purple-600",
      delay: "delay-600",
      id: "gaming"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'events') {
      setFormData(prev => ({
        ...prev,
        events: checked
          ? [...prev.events, value]
          : prev.events.filter(event => event !== value)
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Registration data:', formData);
    alert('Registration successful! Check your email for confirmation.');
    setShowRegister(false);
    setCurrentStep(1);
    setFormData({
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
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // const navItems = ['Home', 'Events', 'Schedule', 'Tickets', 'Contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <AnimationBg />

      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <HomePage />
    

      {/* Countdown Section */}

      <Countdown />

      {/* Events Section */}
      <Event />

      {/* CTA Section */}
      <Cta />

      {/* Footer */}
      <Footer />

      {/* Registration Modal */}
      {/* <Register /> */}
     

    </div>
  );
};

export default App;