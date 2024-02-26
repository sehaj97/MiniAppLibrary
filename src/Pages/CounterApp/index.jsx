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
        <div className="container mx-auto mt-10 max-w-md relative">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <div className="p-8 relative">
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
            </div>
        </div >
    );
};

export default CounterApp;
