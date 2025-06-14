import React, { useState } from 'react';

// Main DashBoard component
const DashBoard = () => {
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

            {/* Main Dashboard Container */}
            <div className="max-w-7xl w-full bg-gray-800 rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 border border-gray-700">

                {/* Left Column: Profile Section */}
                <aside className="lg:col-span-1 bg-gray-700 rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-600">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">My Profile</h2>

                    {/* User Avatar and Name */}
                    <div className="flex flex-col items-center mb-8">
                        <img src="https://placehold.co/150x150/1C2833/88E8FF?text=JD" alt="User Avatar" className="rounded-full border-4 border-teal-500 mb-4 shadow-md" />
                        <p className="text-2xl font-bold text-teal-400">Jane Doe</p>
                        <p className="text-md text-gray-400 mt-1">Registered User</p>
                    </div>

                    {/* Profile Details */}
                    <div className="space-y-4 mb-8 w-full">
                        <div className="flex flex-col items-start text-gray-300 bg-gray-700 p-3 rounded-lg shadow-sm">
                            <div className="flex flex-col items-center space-x-6 w-full justify-start">
                                {/* Email */}
                                <div className="flex flex-col items-center mx-2">
                                    {/* <svg className="w-6 h-6 text-purple-400 mb-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
                                    <span className="font-medium" id="email">Email</span>
                                    <span className="truncate text-sm text-gray-400 mx-2">jane.doe@example.com</span>

                                </div>
                                {/* College */}
                                <div className="flex flex-col items-center mx-2">
                                    {/* <svg className="w-6 h-6 text-purple-400 mb-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 002 2v4a2 2 0 002 2v-4a2 2 0 00-2-2H6V6h10a2 2 0 002 2v4a2 2 0 002 2V6a2 2 0 00-2-2H4z" clipRule="evenodd"></path></svg> */}
                                    <span className="font-medium" id="college">College</span>
                                    <span className="text-sm text-gray-400 mx-2">Arts & Tech University</span>


                                </div>
                                {/* Course */}
                                <div className="flex flex-col items-center mx-2">
                                    {/* <svg className="w-6 h-6 text-purple-400 mb-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H4a1 1 0 00-1 1v3a1 1 0 001 1h1a1 1 0 100-2V4zm3 1h2v2H7V5zm3 0h2v2h-2V5z" clipRule="evenodd"></path></svg> */}
                                    <span className="font-medium" id="course">Course</span>
                                    <span className="text-sm text-gray-400 mx-2">Computer Science</span>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Profile Operations */}
                    <div className="space-y-4 w-full">
                        <button onClick={() => showMessage('Navigating to Edit Profile page...')} className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-semibold">
                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-5.696 4.793a1 1 0 00-1.414 1.414L9 12.586V15h2.414l1.996-1.996-2.828-2.828-1.996-1.996z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-8l.996-1.996 2.828-2.828 1.996-1.996L10 12.586V15h2.414l1.996-1.996 2.828-2.828.793-.793a4 4 0 00-5.656-5.656l-.793.793-2.828 2.828-1.996 1.996L5 10z" clipRule="evenodd"></path></svg>
                            Edit Profile
                        </button>
                        <button onClick={() => showMessage('Navigating to Change Password page...')} className="w-full px-6 py-3 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-semibold">
                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2h2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                            Change Password
                        </button>
                        <button onClick={() => showMessage('Navigating to Communication Preferences page...')} className="w-full px-6 py-3 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-semibold">
                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-.257A6 6 0 0118 8zm-6-4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                            Communication Preferences
                        </button>
                        <button onClick={() => showMessage('Logging out...')} className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-semibold">
                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 10l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414L15.414 13l1.293 1.293a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            Logout
                        </button>
                    </div>
                </aside>

                {/* Right Column: Main Dashboard Content */}
                <main className="lg:col-span-3">
                    {/* Header Section */}
                    <header className="text-center mb-8 bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-600">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-wide">AEC Fest 2025</h1>
                        <p className="text-xl text-gray-300">Your central hub for the most electrifying fest!</p>
                        <p className="text-md text-gray-400 mt-2">Join us from <span className="font-semibold text-teal-400">July 10</span> to <span className="font-semibold text-teal-400">July 12, 2025</span>.</p>
                    </header>

                    {/* My Registered Events Section */}
                    <section className="mb-8 p-6 bg-gray-700 rounded-xl shadow-lg border border-gray-600">
                        <h2 className="text-2xl font-semibold text-teal-400 mb-5">My Registered Events</h2>
                        <p className="text-gray-300 mb-6">Here's a quick overview of the events you've signed up for. Get ready to shine!</p>

                        <div className="space-y-6">
                            {/* Event 1 */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-600">
                                <h3 className="text-xl font-bold text-white mb-1">"Harmony Heist" - Battle of the Bands</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    <span className="font-semibold text-teal-300">Date & Time:</span> July 10, 2025, 6:00 PM
                                    <span className="mx-2 text-gray-500">|</span>
                                    <span className="font-semibold text-teal-300">Venue:</span> Grand Arena
                                </p>
                                <p className="mt-3 text-green-500 font-semibold flex items-center">
                                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Status: Confirmed
                                </p>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    <button onClick={() => showMessage('E-ticket for Harmony Heist displayed.')} className="px-5 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md">View Your E-Ticket / QR Code</button>
                                    <button onClick={() => showMessage('Harmony Heist added to your calendar.')} className="px-5 py-2 bg-gray-600 text-gray-200 text-sm rounded-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-md">Add to Calendar</button>
                                    <button onClick={() => showMessage('Cancellation for Harmony Heist initiated. Check email for confirmation.')} className="px-5 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md">Cancel Registration</button>
                                </div>
                            </div>

                            {/* Event 2 */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-600">
                                <h3 className="text-xl font-bold text-white mb-1">"Code Combat" - Hackathon</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    <span className="font-semibold text-teal-300">Date & Time:</span> March 11, 2025, 9:00 AM - 5:00 PM
                                    <span className="mx-2 text-gray-500">|</span>
                                    <span className="font-semibold text-teal-300">Venue:</span> Innovation Lab
                                </p>
                                <p className="mt-3 text-yellow-500 font-semibold flex items-center">
                                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.514a1 1 0 011.486 0l2.674 3.342c.1.125.166.28.188.44l.039.263.023.161.025.174.015.111.008.067.004.032.002.016.001.008a1 1 0 01-.001.008l-.004.032-.008.067-.015.111-.025.174-.023.161-.039.263c-.022.16-.088.315-.188.44l-2.674 3.342a1 1 0 01-1.486 0L5.583 14.492c-.1-.125-.166-.28-.188-.44l-.039-.263-.023-.161-.025-.174-.015-.111-.008-.067-.004-.032-.002-.016-.001-.008a1 1 0 01.001-.008l.004-.032.008-.067.015-.111.025-.174.023-.161.039-.263c.022-.16.088-.315.188-.44l2.674-3.342zm-1.486 7.686a1 1 0 00-1.486 0L.117 18.066a1 1 0 00.743 1.934h17.914a1 1 0 00.743-1.934L8.257 11.2ZM9 12a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                    Status: Payment Pending
                                </p>
                                <div className="mt-5">
                                    <button onClick={() => showMessage('Redirecting to payment gateway for Code Combat...')} className="px-5 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md">Complete Payment Now</button>
                                </div>
                            </div>

                            {/* Event 3 (Team Event) */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-600">
                                <h3 className="text-xl font-bold text-white mb-1">"Artillery Artillery" - Gaming Tournament</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    <span className="font-semibold text-teal-300">Date & Time:</span> March 12, 2025, 10:00 AM onwards
                                    <span className="mx-2 text-gray-500">|</span>
                                    <span className="font-semibold text-teal-300">Venue:</span> Gaming Zone A
                                </p>
                                <p className="text-gray-400 text-sm">
                                    <span className="font-semibold text-teal-300">Team Name:</span> Pixel Prowlers
                                </p>
                                <p className="text-gray-400 text-sm">
                                    <span className="font-semibold text-teal-300">Team Members:</span> Jane Doe, John Smith, Alice Johnson
                                </p>
                                <p className="mt-3 text-green-500 font-semibold flex items-center">
                                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Status: Confirmed
                                </p>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    <button onClick={() => showMessage('E-ticket for Artillery Artillery displayed.')} className="px-5 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md">View Your E-Ticket / QR Code</button>
                                    <button onClick={() => showMessage('Artillery Artillery added to your calendar.')} className="px-5 py-2 bg-gray-600 text-gray-200 text-sm rounded-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-md">Add to Calendar</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Important Updates & Notifications Section */}
                    <section className="mb-8 p-6 bg-gray-700 rounded-xl shadow-lg border border-red-600">
                        <h2 className="text-2xl font-semibold text-red-400 mb-5 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                            Important Updates & Notifications
                        </h2>
                        <div className="space-y-4 text-gray-300">
                            <p><span className="font-bold text-red-300">Heads up!</span> The venue for "Harmony Heist" on March 10 has been changed to the <span className="font-extrabold text-white">Grand Arena</span>. Please check the updated schedule on the main website.</p>
                            <p>Your payment for "Code Combat" is due by <span className="font-bold text-purple-300">March 9, 2025</span>. Secure your spot before it's too late!</p>
                            <p><span className="font-bold text-green-400">New Event Added:</span> Check out our surprise "Flash Mob Challenge" – registration opens tomorrow, March 8!</p>
                        </div>
                    </section>

                    {/* Quick Actions Section */}
                    <section className="mb-8 p-6 bg-gray-700 rounded-xl shadow-lg border border-teal-600">
                        <h2 className="text-2xl font-semibold text-teal-400 mb-5">Quick Actions</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Digital Fest Pass */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-600 text-center flex flex-col items-center justify-center">
                                <h3 className="text-xl font-bold text-white mb-3">Your Digital Fest Pass</h3>
                                <p className="text-gray-400 text-sm mb-4">Show this QR code at entry points for all events you're registered for.</p>
                                <img src="https://placehold.co/220x220/333333/00B8D4?text=QR+Code" alt="QR Code Placeholder" className="mx-auto rounded-lg shadow-inner border-2 border-teal-500 mb-6" />
                                <button onClick={() => showMessage('QR Code displayed. Please present to scanner.')} className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">Scan My Pass</button>
                            </div>

                            {/* Explore More & Help */}
                            <div className="flex flex-col gap-6">
                                <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-600 h-full flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">Explore More Events</h3>
                                        <p className="text-gray-400 text-sm mb-4">Didn't find what you were looking for? Browse all available events and register for new ones!</p>
                                    </div>
                                    <button onClick={() => showMessage('Navigating to All Events page...')} className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg mt-auto">Browse All Events</button>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-600 h-full flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">Need Help?</h3>
                                        <p className="text-gray-400 text-sm mb-4">Have a question or need assistance? Our support team is here for you.</p>
                                    </div>
                                    <button onClick={() => showMessage('Navigating to Contact Support page...')} className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg mt-auto">Contact Support</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Connect With Us Section */}
                    <section className="text-center p-6 bg-gray-700 rounded-xl shadow-lg border border-gray-600">
                        <h2 className="text-2xl font-semibold text-teal-400 mb-5">Connect With Us</h2>
                        <p className="text-gray-300 mb-6">Stay connected and share your fest experience!</p>
                        <div className="flex justify-center space-x-8">
                            {/* Social media icons (placeholders) */}
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200 transform hover:scale-125" onClick={() => showMessage('Navigating to Facebook.')}>
                                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200 transform hover:scale-125" onClick={() => showMessage('Navigating to Instagram.')}>
                                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 4c-2.716 0-3.056.012-4.123.06-1.07.049-1.791.218-2.427.465C4.896 4.902 4.394 5.253 4.01 5.637S3.398 6.504 3.152 7.14c-.247.636-.416 1.356-.465 2.427-.048 1.066-.06 1.407-.06 4.123s.012 3.057.06 4.123c.049 1.07.218 1.791.465 2.427.247.636.598 1.139.982 1.523s.707.735 1.343.982c.636.247 1.357.416 2.428.465 1.066.048 1.407.06 4.123.06s3.057-.012 4.123-.06c1.07-.049 1.791-.218 2.427-.465.636-.247 1.139-.598 1.523-.982s.735-.707.982-1.343c.247-.636.416-1.357.465-2.428.048-1.066.06-1.407.06-4.123s-.012-3.057-.06-4.123c-.049-1.07-.218-1.791-.465-2.427-.247-.636-.598-1.139-.982-1.523s-.707-.735-1.343-.982c-.636-.247-1.357-.416-2.428-.465C15.057 4.012 14.716 4 12 4zm0 2.235c2.613 0 2.923.01 3.968.058 1.01.046 1.558.21 1.954.368.4.158.678.36.924.606.246.246.448.525.606.924.158.396.322.944.368 1.954.048 1.045.058 1.355.058 3.968s-.01 2.923-.058 3.968c-.046 1.01-.21 1.558-.368 1.954-.158.4-.36.678-.606.924-.246.246-.448.525-.606.924-.158-.396-.322-.944-.368-1.954-.048-1.045-.058-1.355-.058-3.968s.01-2.923.058-3.968c.046-1.01.21-1.558.368-1.954.158-.4.36-.678.606-.924.246-.246.448.525.924.606.396-.158.944-.322.968-.368C9.077 6.245 9.387 6.235 12 6.235zm0 1.996c-2.073 0-3.769 1.696-3.769 3.769s1.696 3.769 3.769 3.769 3.769-1.696 3.769-3.769-1.696-3.769-3.769-3.769zm0 6.183c-1.332 0-2.414-1.082-2.414-2.414S10.668 9.382 12 9.382s2.414 1.082 2.414 2.414-1.082 2.414-2.414 2.414zm5.28-6.93a.855.855 0 00-.855-.855.855.855 0 00-.855.855c0 .47.385.855.855.855.47 0 .855-.385.855-.855z" clipRule="evenodd"></path></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200 transform hover:scale-125" onClick={() => showMessage('Navigating to X (Twitter).')}>
                                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.884L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.714 6.236L18.244 2.25zm-.308 1.543l-1.99 2.63-6.208 8.196L4.045 20.25H2.434l6.14-8.115L17.964 3.793h-1.02z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 transform hover:scale-125" onClick={() => showMessage('Navigating to YouTube.')}>
                                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19.812 5.485c.745-.331 1.31-.951 1.66-1.794.352-.843.49-1.782.49-2.738C22 1.306 20.694 0 19.125 0H4.875C3.306 0 2 1.306 2 2.953c0 .956.138 1.895.49 2.738.35.843.915 1.463 1.66 1.794C5.568 7.218 8.293 7.5 12 7.5s6.432-.282 7.812-.515zM22 10.375c0-.663-.09-1.295-.262-1.884-.17-.588-.413-1.127-.728-1.611-.315-.483-.69-.915-1.12-1.295C19.498 5.253 18.895 5 18.125 5c-.77 0-1.442.253-2.012.759-.57.506-1.026 1.157-1.368 1.954-.343.797-.514 1.716-.514 2.753v5.625c0 1.037.171 1.956.514 2.753.342.797.798 1.448 1.368 1.954.57.506 1.242.759 2.012.759 1.77 0 3.32-.756 4.65-2.269 1.33-1.513 1.955-3.375 1.955-5.581V10.375z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default DashBoard;

