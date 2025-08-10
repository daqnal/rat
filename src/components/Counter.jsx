import { useState } from "react";

export default function Counter({ spins }) {
    
    return (
        <div id="counter-container">
            <span>you have been blessed with </span>
            <span id="counter">{spins}</span>
            <span> spins of the rat</span>
        </div>
    )
}