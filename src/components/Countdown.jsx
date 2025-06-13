import React, { useState, useEffect } from 'react'
import './Countdown.css'; // ✅ Import the CSS file


const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 45,
        hours: 12,
        minutes: 30,
        seconds: 45
    });

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
    return (
        <div>
            <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        Festival Starts In
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {Object.entries(timeLeft).map(([unit, value], index) => (
                            <div
                                key={unit}
                                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-b from-yellow-400 to-orange-500 bg-clip-text mb-2">
                                    {value}
                                </div>
                                <div className="text-gray-300 uppercase tracking-wider text-sm">
                                    {unit}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Countdown
