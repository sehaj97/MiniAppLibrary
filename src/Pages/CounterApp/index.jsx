import { useState } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => Math.max(prevCount - 1, 0));
    };

    return (
        <div className="container mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink p-8 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">

            <h1 className="text-2xl font-semibold mb-4 text-center">Step Counter</h1>
            <div id="walk-container">
                <div id="walk"></div>
            </div>
            <div className="flex justify-center items-center gap-4 relative">

                <button
                    className="btn btn-primary block w-full rounded-md bg-indigo-600 px-3 text-center text-3xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleDecrement}
                >
                    <span className="text-3xl font-bold">-</span>
                </button>
                <p className="text-3xl font-bold">{count}</p>
                <button
                    className="btn btn-primary block w-full rounded-md bg-indigo-600 px-3 text-center text-3xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleIncrement}
                >
                    <span className="text-3xl font-bold">+</span>
                </button>
            </div>
        </div>
    );
};

export default CounterApp;
