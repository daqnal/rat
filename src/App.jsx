import { createRoot } from 'react-dom/client'
import { useEffect, useState } from 'react';

import "./global.css";

import Counter from "./components/Counter.jsx";
import Scene from "./components/3d/Scene";
import Background from "./components/Background.jsx";
import Audio from "./components/Audio.jsx";
import Sidebar from './components/Sidebar.jsx';

function App() {

  const [spins, setSpins] = useState(0);

  // Speed of the rat's spin, measured in revolutions per second
  const [speed, setSpeed] = useState(0.2);

  // Speed of the changing hue of the rat, measured in cycles per second
  const [hueSpeed, setHueSpeed] = useState(0.1);

  return (
    <>
      {/* <Sidebar /> */}
      <Background />
      <Scene speed={speed} setSpins={setSpins} hueSpeed={hueSpeed} />
      <Counter spins={spins}/>
      <Audio />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
