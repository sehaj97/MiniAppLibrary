import useApiFetch from "../../Utilities/CustomHooks/useApiFetch";

const FlagsApp = () => {
    const { flagData, isLoading, isError } = useApiFetch('https://countriesnow.space/api/v0.1/countries/flag/images');
    if (isError) return
    <div className={`container mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink p-8 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
        <h1 className="text-2xl font-semibold mb-4 text-center">Error Occurred</h1>
    </div>
    if (isLoading) return
    <div className={`container mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink p-8 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
        <h1 className="text-2xl font-semibold mb-4 text-center">...Loading</h1>
    </div>
    return (
        <div className={`container mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink p-8 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
            <h1 className="text-2xl font-semibold mb-4 text-center">Flags App</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {flagData && flagData.data.map((flag) => (
                    <div key={flag.name} className="flex flex-col items-center">
                        {flag.flag && (
                            <img
                                className="icon-image"
                                src={flag.flag}
                                alt={flag.name}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        )}
                        <p className="flag-name">{flag.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlagsApp;
