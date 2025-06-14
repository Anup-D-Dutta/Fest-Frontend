import { Routes, Route } from 'react-router-dom';
import PublicRoute from './router/PublicRoute';
import PrivateRoute from './router/PrivateRoute';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import DashBoardPage from './pages/DashBoardPage';
import AnimationBg from './components/AnimationBg';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Event from './components/Event';

const App = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
    <AnimationBg />
    <NavBar />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Event />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashBoardPage />} />
        </Route>
      </Routes>
    <Footer />
  </div>
);

export default App;