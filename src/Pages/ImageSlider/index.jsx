import { useState } from "react";

function ImageSlider() {
    const images = [
        'https://picsum.photos/200/300?random=1',
        'https://picsum.photos/200/300?random=2',
        'https://picsum.photos/200/300?random=3',
        'https://picsum.photos/200/300?random=4',
        'https://picsum.photos/200/300?random=5',
        'https://picsum.photos/200/300?random=6',
        'https://picsum.photos/200/300?random=7',
        'https://picsum.photos/200/300?random=8',
        'https://picsum.photos/200/300?random=9',
        'https://picsum.photos/200/300?random=10'
    ];
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null; // return nothing if no images
    }

    return (
        <div className="container mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink p-8 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">

            <h1 className="text-2xl font-semibold mb-4 text-center">Image Slider</h1>
            <div className='relative flex items-center justify-center'>
                <button onClick={prevSlide} className='absolute left-0 z-10 bg-gray-800 text-white p-5 rounded-full'>
                    &#10094; {/* Left Arrow */}
                </button>
                {images.map((image, index) => (
                    <div key={index} className={index === current ? 'opacity-100' : 'opacity-0'}>
                        {index === current && (
                            <img src={image} alt='slider' className='w-full h-full object-cover' />
                        )}
                    </div>
                ))}
                <button onClick={nextSlide} className='absolute right-0 z-10 bg-gray-800 text-white p-5 rounded-full'>
                    &#10095; {/* Right Arrow */}
                </button>
            </div>
        </div>

    );
};



export default ImageSlider;