import React from 'react';
import { Link } from 'react-router-dom';

const NavigationHeader = () => {
    return (
        <header className="bg-gray-800 py-4 fixed w-full top-0 z-50 mb-5">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <h1 className="text-white font-bold text-xl">
                        <Link to="/" className="text-white hover:text-gray-300">Mini Web App Store</Link></h1>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavigationHeader;
