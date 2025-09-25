import { createRoot } from "react-dom/client";
import { useState } from "react";

import "./global.css";
import Rat from "./components/RatViewer";
import EntryScreen from "./components/EntryScreen";

function App() {
  const [rat, toggleRat] = useState(false);

  return <>{rat ? <Rat /> : <EntryScreen toggleRat={toggleRat} />}</>;
}

createRoot(document.getElementById("root")).render(<App />);
