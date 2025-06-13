import React from 'react'
import { MapPin, Clock } from 'lucide-react';


const Footer = () => {
    const navItems = ['Home', 'Events', 'Schedule', 'Tickets', 'Contact'];
    return (
        <footer className="bg-black/50 py-12 px-4 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            NEXUS 2025
                        </h3>
                        <p className="text-gray-400">
                            The ultimate college festival experience bringing together talent, creativity, and celebration.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            {navItems.map((item, index) => (
                                <a key={index} href={`#${item.toLowerCase()}`} className="block text-gray-400 hover:text-pink-400 transition-colors duration-300">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-2 text-gray-400">
                            <p className="flex items-center">
                                <MapPin size={16} className="mr-2" />
                                College Campus, City 123456
                            </p>
                            <p className="flex items-center">
                                <Clock size={16} className="mr-2" />
                                August 15-17, 2025
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 NEXUS College Fest. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
