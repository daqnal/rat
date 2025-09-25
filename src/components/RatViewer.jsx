import { useState } from "react";
import {
  AudioPlayerProvider,
  useAudioPlayer,
  useAudioPlayerContext,
} from "react-use-audio-player";

import Counter from "./Counter.jsx";
import Scene from "./3d/Scene.jsx";
import Background from "./Background.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

import shantyAudio from "/audio/shanty.ogg";
import candylandAudio from "/audio/candyland.ogg";

export default function RatViewer() {
  const [spins, setSpins] = useState(0);

  // Speed of the rat's spin, measured in revolutions per minute
  const [speed, setSpeed] = useState(20);

  // Speed of the changing hue of the rat, measured in cycles per second
  const [hueSpeed, setHueSpeed] = useState(0.1);

  const { togglePlayPause, isPlaying } = useAudioPlayer(shantyAudio, {
    autoplay: true,
    loop: true,
  });

  return (
    <>
      <Sidebar
        speed={speed}
        setSpeed={setSpeed}
        togglePlayPause={togglePlayPause}
        isPlaying={isPlaying}
      />
      <Background />
      <Scene speed={speed} setSpins={setSpins} hueSpeed={hueSpeed} />
      <Counter spins={spins} />
    </>
  );
}
