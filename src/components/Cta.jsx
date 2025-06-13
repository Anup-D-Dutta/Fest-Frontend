import React from 'react'
import {Calendar, Star,} from 'lucide-react';


const Cta = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Experience the Magic?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                    Don't miss out on the most spectacular college festival of the year!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => setShowRegister(true)}
                        className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30"
                    >
                        <span className="relative z-10 flex items-center justify-center">
                            <Star className="mr-2" size={20} />
                            Get Your Tickets
                        </span>
                    </button>

                    <button className="px-10 py-5 border-2 border-purple-400 rounded-full font-bold text-xl hover:bg-purple-400 hover:text-white transition-all duration-300">
                        <Calendar className="inline mr-2" size={20} />
                        View Full Schedule
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Cta
