import "./global.css";
import Counter from "./components/Counter.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { createRoot } from 'react-dom/client'
import Scene from "./components/Scene";


function App() {
  return (
    <>
      <Counter />
      <Scene />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)