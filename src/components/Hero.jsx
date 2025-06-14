import React, { useState, useEffect } from 'react';
import { Music, Zap, Trophy, Palette, Users, Gamepad2, Calendar, MapPin, Clock, Star, ChevronRight, Menu, X, Home } from 'lucide-react';
import RegisterHeader from './RegisterHeader';
import Countdown from './Countdown';
import Cta from './Cta';
import Event from './Event';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
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
    const [scrollY, setScrollY] = useState(0);

    const [currentStep, setCurrentStep] = useState(1);
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




    return (
        <div>
            <section className="relative min-h-screen flex items-center justify-center px-4" id="home">
                <div className="text-center z-10 max-w-4xl mx-auto">
                    <div className="animate-fade-in-up">
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                            AEC 2025
                        </h1>
                        <p className="text-xl md:text-2xl mb-4 text-gray-300 animate-fade-in-up animation-delay-500">
                            The Ultimate College Festival Experience
                        </p>
                        <p className="text-lg mb-8 text-gray-400 animate-fade-in-up animation-delay-1000">
                            Join us for 3 days of music, dance, tech, and unforgettable memories!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1500">
                            <button
                                onClick={() => {
                                    setShowRegister(true);
                                    navigate('/register')
                                }}
                                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25"
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    Register Now
                                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            <button className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 backdrop-blur-sm">
                                View Schedule
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-2 h-2 bg-white rounded-full animate-float opacity-60`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        ></div>
                    ))}
                </div>
            </section>
            {/* {showRegister && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-gradient-to-br from-purple-900/90 to-indigo-900/90 backdrop-blur-lg rounded-3xl border border-white/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                          
                            <RegisterHeader />


                            <div className="flex justify-center mb-8">
                                <div className="flex items-center space-x-4">
                                    {[1, 2, 3].map((step) => (
                                        <div key={step} className="flex items-center">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${currentStep >= step
                                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 border-pink-500 text-white'
                                                : 'border-gray-400 text-gray-400'
                                                }`}>
                                                {step}
                                            </div>
                                            {step < 3 && (
                                                <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${currentStep > step ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 'bg-gray-400'
                                                    }`}></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                              
                                {currentStep === 1 && (
                                    <div className="space-y-6 animate-fade-in-up">
                                        <h3 className="text-2xl font-bold text-center mb-6">Personal Information</h3>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">First Name *</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                                                    placeholder="Enter your first name"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium mb-2">Last Name *</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                                                    placeholder="Enter your last name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                                                placeholder="Enter your email address"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">College/University *</label>
                                                <input
                                                    type="text"
                                                    name="college"
                                                    value={formData.college}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                                                    placeholder="Enter your college name"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium mb-2">Year of Study *</label>
                                                <select
                                                    name="year"
                                                    value={formData.year}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                                                >
                                                    <option value="">Select Year</option>
                                                    <option value="1st">1st Year</option>
                                                    <option value="2nd">2nd Year</option>
                                                    <option value="3rd">3rd Year</option>
                                                    <option value="4th">4th Year</option>
                                                    <option value="graduate">Graduate</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                )}

                              
                                {currentStep === 2 && (
                                    <div className="space-y-6 animate-fade-in-up">
                                        <h3 className="text-2xl font-bold text-center mb-6">Select Events</h3>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            {events.map((event) => (
                                                <label key={event.id} className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 cursor-pointer transition-all duration-300 group">
                                                    <input
                                                        type="checkbox"
                                                        name="events"
                                                        value={event.id}
                                                        checked={formData.events.includes(event.id)}
                                                        onChange={handleInputChange}
                                                        className="sr-only"
                                                    />
                                                    <div className={`w-6 h-6 rounded-md border-2 mr-4 flex items-center justify-center transition-all duration-300 ${formData.events.includes(event.id)
                                                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 border-pink-500'
                                                        : 'border-gray-400 group-hover:border-pink-400'
                                                        }`}>
                                                        {formData.events.includes(event.id) && (
                                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className={`w-10 h-10 bg-gradient-to-br ${event.gradient} rounded-lg flex items-center justify-center mr-3`}>
                                                            <event.icon size={20} className="text-white" />
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold">{event.title}</div>
                                                            <div className="text-sm text-gray-400">Click to select</div>
                                                        </div>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}

                               
                                {currentStep === 3 && (
                                    <div className="space-y-6 animate-fade-in-up">
                                        <h3 className="text-2xl font-bold text-center mb-6">Additional Information</h3>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">T-Shirt Size</label>
                                            <select
                                                name="tshirtSize"
                                                value={formData.tshirtSize}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                                            >
                                                <option value="XS">XS</option>
                                                <option value="S">Small</option>
                                                <option value="M">Medium</option>
                                                <option value="L">Large</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                            </select>
                                        </div>

                                        <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10">
                                            <input
                                                type="checkbox"
                                                name="accommodation"
                                                checked={formData.accommodation}
                                                onChange={handleInputChange}
                                                className="sr-only"
                                            />
                                            <div
                                                onClick={() => handleInputChange({ target: { name: 'accommodation', type: 'checkbox', checked: !formData.accommodation } })}
                                                className={`w-6 h-6 rounded-md border-2 mr-4 flex items-center justify-center cursor-pointer transition-all duration-300 ${formData.accommodation
                                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 border-pink-500'
                                                    : 'border-gray-400 hover:border-pink-400'
                                                    }`}
                                            >
                                                {formData.accommodation && (
                                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-semibold">Need Accommodation?</div>
                                                <div className="text-sm text-gray-400">We'll help arrange nearby hostels/hotels</div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 p-6 rounded-xl border border-pink-500/30">
                                            <h4 className="text-xl font-bold mb-4">Registration Summary</h4>
                                            <div className="space-y-2 text-sm">
                                                <p><span className="text-gray-400">Name:</span> {formData.firstName} {formData.lastName}</p>
                                                <p><span className="text-gray-400">Email:</span> {formData.email}</p>
                                                <p><span className="text-gray-400">College:</span> {formData.college}</p>
                                                <p><span className="text-gray-400">Events:</span> {formData.events.length > 0 ? formData.events.join(', ') : 'None selected'}</p>
                                                <p><span className="text-gray-400">T-Shirt Size:</span> {formData.tshirtSize}</p>
                                                <p><span className="text-gray-400">Accommodation:</span> {formData.accommodation ? 'Yes' : 'No'}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                              
                                <div className="flex justify-between mt-8 pt-6 border-t border-white/20">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        disabled={currentStep === 1}
                                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${currentStep === 1
                                            ? 'text-gray-500 cursor-not-allowed'
                                            : 'text-gray-300 hover:text-white border border-gray-400 hover:border-white'
                                            }`}
                                    >
                                        Previous
                                    </button>

                                    {currentStep < 3 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                                        >
                                            Next Step
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                                        >
                                            Complete Registration
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )} */}
        </div>

    )
}

export default Hero
