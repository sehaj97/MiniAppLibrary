
import React, { useRef, useState } from 'react';
import ButtonUi from '../../Components/ButtonUi';

const Imagepicker = () => {
    const inputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        console.log(event)
    };

    const handleClick = () => {
        inputRef.current.click();
    };

    return (<div className="container mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink p-8 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">

        <h1 className="text-2xl font-semibold mb-4 text-center">Image picker</h1>

        <div>
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
            />
            <ButtonUi onClick={handleClick}>Choose Image</ButtonUi>
            {selectedImage && (
                <div>
                    <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                </div>
            )}
        </div>
    </div>
    );
};

export default Imagepicker;
