import { useState } from "react";
import audioFile from "/candyland.ogg";

export default function Audio() {
    const audioTag = document.getElementById("audio-tag");
    const [play, setPlay] = useState(false);

    return (
        <>
            {/* <button
                id="audio-button"
                onClick={() => {
                play ? setPlay(false) : setPlay(true);
                play ? audioTag.pause() : audioTag.play();
                }}
            >
                toggle
            </button> */}
            <audio id="audio-tag" src={audioFile}/>
        </>
    )
}