import React, { useState } from 'react';
import shantyAudio from "/audio/shanty.ogg";

export default function AudioControl() {

    // const [isPlaying, setIsPlaying] = useState(false);
    // const audio = new Audio(shantyAudio);

    // const togglePlayPause = () => {
    //     if (isPlaying) {
    //     audio.pause();
    //     } else {
    //     audio.play();
    //     }
    //     setIsPlaying(!isPlaying);
    // };

    return (
        <>
            <p>vol</p>
            {/* <button onClick={togglePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button> */}
        </>
    )
}