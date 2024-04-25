import React, { useState } from 'react';
import "./style.css"
import DrumPad from '../../Components/DrumPad';
export default function DrumKit() {
    const [activePad, setActivePad] = useState(null);

    const drums = [
        { key: 'W', id: 'tom1', src: 'sounds/tom-1.mp3' },
        { key: 'A', id: 'tom2', src: 'sounds/tom-2.mp3' },
        { key: 'S', id: 'tom3', src: 'sounds/tom-3.mp3' },
        { key: 'D', id: 'tom4', src: 'sounds/tom-4.mp3' },
        { key: 'J', id: 'snare', src: 'sounds/snare.mp3' },
        { key: 'K', id: 'crash', src: 'sounds/crash.mp3' },
        { key: 'L', id: 'kick-bass', src: 'sounds/kick-bass.mp3' }
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
                        />
                    ))}
                </div>
                <p className='text-white'>Currently playing: {activePad}</p>
            </div>

        </>
    )
}