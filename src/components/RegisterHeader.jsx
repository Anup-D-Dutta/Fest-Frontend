import React from 'react'
import { X } from 'lucide-react';

const RegisterHeader = () => {
    return (
        <div className="flex justify-between items-center mb-8">
            <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Register for NEXUS 2025
                </h2>
                <p className="text-gray-300 mt-2">Join the ultimate college festival experience</p>
            </div>
            <button
                onClick={() => setShowRegister(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
            >
                <X size={28} />
            </button>
        </div>
    )
}

export default RegisterHeader
