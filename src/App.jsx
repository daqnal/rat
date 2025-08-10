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
  const [speed, setSpeed] = useState(1);

  return (
    <>
      {/* <Sidebar /> */}
      <Background />
      <Scene speed={speed} setSpins={setSpins}/>
      <Counter spins={spins}/>
      <Audio />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)