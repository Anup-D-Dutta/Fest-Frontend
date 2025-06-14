import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['Home', 'Events', 'Schedule', 'Tickets', 'Contact'];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        AEC 2025
                    </div>

                    {/* Desktop Navigation */}
                    {/* <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="relative hover:text-pink-400 transition-colors duration-300 group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div> */}

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
                        <Link to="" className="text-lg hover:text-blue-300 transition-colors duration-300 py-1 px-3 rounded-md">Home</Link>
                        <Link to="/events" className="text-lg hover:text-blue-300 transition-colors duration-300 py-1 px-3 rounded-md">Events</Link>
                        <Link to="/schedule" className="text-lg hover:text-blue-300 transition-colors duration-300 py-1 px-3 rounded-md">Schedule</Link>
                        <Link to="/tickets" className="text-lg hover:text-blue-300 transition-colors duration-300 py-1 px-3 rounded-md">Tickets</Link>
                        <Link to="/contact" className="text-lg hover:text-blue-300 transition-colors duration-300 py-1 px-3 rounded-md">Contact</Link>
                        <Link to="/register" className="text-lg hover:text-blue-300 transition-colors duration-300 py-1 px-3 rounded-md">Register</Link>
                        <Link to="/login" className="text-lg hover:text-blue-300 transition-colors duration-300 py-1 px-3 rounded-md">Login</Link>

                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/10">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="block py-2 hover:text-pink-400 transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar
