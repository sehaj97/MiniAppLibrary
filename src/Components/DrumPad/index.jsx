import React, { useEffect } from 'react';

function DrumPad({ triggerKey, soundId, soundSrc, handlePlay, drumclass, imgPath }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key.toUpperCase() === triggerKey.toUpperCase()) {
        handlePlay(soundId, soundSrc);
      }
    }
    window.addEventListener('keydown', handleKeyDown);

  }, []);

  return (
    <button
      onClick={() => handlePlay(soundId, soundSrc)}
      className={`${drumclass} bg-no-repeat bg-center bg-cover text-white font-bold py-2 px-4`}
      style={{ backgroundImage: `url(${imgPath})`, backgroundSize: 'contain', minHeight: '100px', minWidth: '100px' }}
      tabIndex="0"
    >
      {triggerKey}
    </button>

  );
}

export default DrumPad;
