import React, { useState } from 'react';
import "./style.css"
import DrumPad from '../../Components/DrumPad';
export default function DrumKit() {
    const [activePad, setActivePad] = useState(null);

    const drums = [
        { key: 'W', id: 'tom1', src: 'sounds/tom-1.mp3', imgPath: 'drum-images/tom1.png' },
        { key: 'A', id: 'tom2', src: 'sounds/tom-2.mp3', imgPath: 'drum-images/tom2.png' },
        { key: 'S', id: 'tom3', src: 'sounds/tom-3.mp3', imgPath: 'drum-images/tom3.png' },
        { key: 'D', id: 'tom4', src: 'sounds/tom-4.mp3', imgPath: 'drum-images/tom4.png' },
        { key: 'J', id: 'snare', src: 'sounds/snare.mp3', imgPath: 'drum-images/snare.png' },
        { key: 'K', id: 'crash', src: 'sounds/crash.mp3', imgPath: 'drum-images/crash.png' },
        { key: 'L', id: 'kick-bass', src: 'sounds/kick-bass.mp3', imgPath: 'drum-images/kick.png' }
    ];
    const playSound = (id, src) => {
        setActivePad(id);
        const audio = new Audio(src);
        audio.currentTime = 0; // rewind to the start
        audio.play();
    };
    return (
        <>
            <div className='container drumbackground mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out p-8' >

                <h1 className="drumheading">Drum 🥁 Kit</h1>
                <div className="set">
                    {drums.map(drum => (
                        <DrumPad
                            key={drum.id}
                            triggerKey={drum.key}
                            soundId={drum.id}
                            soundSrc={drum.src}
                            handlePlay={() => playSound(drum.id, drum.src)}
                            drumclass={`${drum.id.toLowerCase()} drum`}
                            imgPath={drum.imgPath}
                        />
                    ))}
                </div>
                <p className='text-white'>Currently playing: {activePad}</p>
            </div>

        </>
    )
}