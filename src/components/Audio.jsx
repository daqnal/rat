import { useState, useRef, useEffect } from 'react';
import shantyAudio from "/audio/shanty.ogg";

export default function Audio() {
    const [isPlaying, setIsPlaying] = useState(true);
    const audio = useRef(new Audio(shantyAudio));

    function togglePlayPause() {
        if (isPlaying) {
        audio.pause();
        } else {
        audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return null;
}