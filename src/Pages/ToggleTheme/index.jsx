import { useState } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
const ToggleTheme = () => {
    const [isLight, setIsLight] = useState(false);
    const handleToggle = () => {
        setIsLight(!isLight);
    };

    return (
        <div className={`container mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 ${isLight ? "bg-lightPink" : "bg-bgpink text-white"} p-8 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>

            <h1 className="text-2xl font-semibold mb-4 text-center">Toogle Background</h1>
            <div className="flex justify-center items-center">
                <input type="checkbox" className="checkbox" id="checkbox" checked={isLight} onChange={handleToggle} />
                <label htmlFor="checkbox" className="checkbox-label">
                    <FaRegMoon className="fa-moon" />
                    <FaSun className="fa-sun" />
                    <span className="ball"></span>
                </label>
            </div>
        </div>
    );
};

export default ToggleTheme;
