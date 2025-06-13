import React, { useState } from 'react'
import { Music, Zap, Trophy, Palette, Users, Gamepad2, Calendar, MapPin, Clock, Star, ChevronRight, Menu, X } from 'lucide-react';
import './Countdown.css'


const Event = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 45,
        hours: 12,
        minutes: 30,
        second: 45
    })

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
    return (
        <div>
            <section className="py-20 px-4" id="events">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Festival Events
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Dive into an ocean of creativity, competition, and celebration with our diverse range of events
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className={`group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-500 cursor-pointer animate-fade-in-up ${event.delay}`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${event.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <event.icon size={32} className="text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {event.description}
                                    </p>

                                    <div className="flex items-center text-pink-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                        Learn More
                                        <ChevronRight size={16} className="ml-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Event
