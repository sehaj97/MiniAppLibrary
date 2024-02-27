// ErrorPage.js

import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="max-w-md w-full text-center">
                <h1 className="text-4xl font-bold text-gray-900">Oops!</h1>
                <p className="text-xl text-gray-700 mt-4">This Web App is under construction</p>
                <p className="text-lg text-gray-700 mt-2">Please try again later.</p>
            </div>
        </div>
    );
};

export default ErrorPage;
