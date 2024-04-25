import React, { useEffect, useRef } from 'react';

function DrumPad({ triggerKey, soundId, soundSrc, handlePlay, drumclass }) {

  const btnRef = useRef(null)
  function handleKeyDown(e) {
    if (e.key.toUpperCase() === triggerKey.charCodeAt(0)) {
      handlePlay(soundId, soundSrc);
    }
    console.log(e.key)
  }
  useEffect(() => {
    // Focus the div when the component mounts
    if (btnRef.current) {
      btnRef.current.focus();
    }
  }, []);

  return (
    <button ref={btnRef} onClick={() => handlePlay(soundId, soundSrc)} onKeyDown={(e) => handleKeyDown(e)} className={drumclass}>
      {triggerKey}
    </button>
  );
}

export default DrumPad;
