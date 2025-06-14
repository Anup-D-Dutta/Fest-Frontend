import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Main Registration Component
const Register1 = () => {
    const navigate = useNavigate();
    // State for form inputs
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [course, setCourse] = useState(''); // This will now hold the selected course
    const [phoneNumber, setPhoneNumber] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

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

    // Handle registration form submission
    const handleRegistration = (e) => {
        e.preventDefault();

        // Basic validation
        if (!fullName || !email || !password || !confirmPassword || !collegeName || !course || !phoneNumber) {
            showMessage('Please fill in all required fields.');
            return;
        }

        if (password !== confirmPassword) {
            showMessage('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            showMessage('Password must be at least 6 characters long.');
            return;
        }

        if (!agreeTerms) {
            showMessage('You must agree to the Terms & Conditions.');
            return;
        }

        // Simulate API call for registration
        showMessage(`Registering user: ${fullName} from ${collegeName}, studying ${course}. Check your email for verification.`);
        // In a real application, you would send this data to your backend API
        // e.g., fetch('/api/register', { method: 'POST', body: JSON.stringify({ email, password, ... }) });
    };

    // Define common course options
    const courseOptions = [
        "Select your Course/Program", // Default disabled option
        "Bachelor of Computer Applications",
        "Bachelor of Business Administration",
        "B.Tech Computer Science Engineering",
        "B.Tech Electrical Engineering",
        "B.Tech Mechanical Engineering",
        "B.Tech Civil Engineering",
        "Master of Computer Applications",
        "M.Tech Engineering"
    ];

    return (
        <div className="bg-gray-900 mt-16 min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 font-inter">
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

            {/* Registration Card */}
            <div className="max-w-xl w-full bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-700">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-white mb-2 tracking-wide">Join the Fest!</h2>
                    <p className="mt-2 text-gray-400 text-lg">Create your Fest Account</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleRegistration}>
                    {/* Full Name */}
                    <div>
                        <label htmlFor="full-name" className="sr-only">Full Name</label>
                        <input
                            id="full-name"
                            name="fullName"
                            type="text"
                            autoComplete="name"
                            required
                            className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 text-lg shadow-sm"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 text-lg shadow-sm"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 text-lg shadow-sm"
                            placeholder="Password (min 6 characters)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                        <input
                            id="confirm-password"
                            name="confirmPassword"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 text-lg shadow-sm"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    {/* College Name */}
                    <div>
                        <label htmlFor="college-name" className="sr-only">College Name</label>
                        <input
                            id="college-name"
                            name="collegeName"
                            type="text"
                            required
                            className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 text-lg shadow-sm"
                            placeholder="College Name"
                            value={collegeName}
                            onChange={(e) => setCollegeName(e.target.value)}
                        />
                    </div>

                    {/* Course - NOW A DROPDOWN */}
                    <div>
                        <label htmlFor="course" className="sr-only">Course/Program</label>
                        <select
                            id="course"
                            name="course"
                            required
                            className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-600 text-white bg-gray-700 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 text-lg shadow-sm cursor-pointer"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                        >
                            {courseOptions.map((option, index) => (
                                <option
                                    key={index}
                                    value={option === "Select your Course/Program" ? "" : option}
                                    disabled={option === "Select your Course/Program"}
                                    hidden={option === "Select your Course/Program"} // Hides the default option after selection
                                    className="bg-gray-800 text-white"
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone-number" className="sr-only">Phone Number</label>
                        <input
                            id="phone-number"
                            name="phoneNumber"
                            type="tel"
                            autoComplete="tel"
                            required
                            className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 text-lg shadow-sm"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-center">
                        <input
                            id="agree-terms"
                            name="agreeTerms"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-600 rounded"
                            checked={agreeTerms}
                            onChange={(e) => setAgreeTerms(e.target.checked)}
                        />
                        <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-300">
                            I agree to the <a href="#" onClick={() => showMessage('Terms & Conditions page would open here.')} className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200">Terms & Conditions</a>
                        </label>
                    </div>

                    {/* Register Button */}
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Register Account
                        </button>
                    </div>
                </form>

                {/* Link to Login */}
                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Already have an account?
                        <a href="#" onClick={() => navigate('/login')} className="p-2 font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register1;
