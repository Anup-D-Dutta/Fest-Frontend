import React, { useState } from 'react';

// Main Login Component
const Login = () => {
    // State for form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // State for managing the custom modal visibility and message
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    // Function to display messages in a custom modal
    const showMessage = (message) => {
        setModalMessage(message);
        setIsModalOpen(true);
    };

    // Function to close the custom modal
    const closeModal = () => {
        setIsModalOpen(false);
        setModalMessage('');
    };

    // Handle login form submission
    const handleLogin = (e) => {
        e.preventDefault();
        // Here you would typically send data to an authentication API
        // For demonstration, we'll just show a message.
        if (email && password) {
            showMessage(`Attempting to log in with Email: ${email}, Remember Me: ${rememberMe ? 'Yes' : 'No'}.`);
            // In a real app, you'd integrate with Firebase Auth or similar here.
        } else {
            showMessage('Please enter both your email/username and password.');
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 font-inter">
            {/* Message Modal */}
            {isModalOpen && (
                <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="modal-content bg-white p-8 rounded-xl shadow-2xl max-w-sm text-center relative transform transition-all duration-300 scale-100 opacity-100">
                        <span className="close-button absolute top-3 right-4 text-3xl font-bold text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" onClick={closeModal}>&times;</span>
                        <p className="text-xl font-medium text-gray-800 mb-6">{modalMessage}</p>
                        <button onClick={closeModal} className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-md">OK</button>
                    </div>
                </div>
            )}

            {/* Login Card */}
            <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-700">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-white mb-2 tracking-wide">Welcome Back!</h2>
                    <p className="mt-2 text-gray-400 text-lg">Sign in to your Fest Account</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email address or Username</label>
                        <input
                            id="email-address"
                            name="email"
                            type="text" // Changed to text to accommodate username too
                            autoComplete="current-username" // or 'email'
                            required
                            className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 text-lg shadow-sm"
                            placeholder="Email address or Username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 text-lg shadow-sm"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-600 rounded"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" onClick={() => showMessage('Forgot Password link clicked. Please check your email for recovery instructions.')} className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            onClick={() => <Link to="/dashboard" className="text-lg hover:text-blue-300 transition-colors duration-300 py-1 px-3 rounded-md">Dashboard</Link>}
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Don't have an account?
                        <a href="#" onClick={() => showMessage('Navigating to Sign Up page...')} className="font-medium text-purple-400 hover:text-purple-300 ml-2 transition-colors duration-200">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
