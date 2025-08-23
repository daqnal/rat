export default function SpeedControl({ speed, setSpeed }) {
  return (
    <>
      <input
        id="speed-input"
        type="number"
        value={speed}
        step="0.1"
        onChange={(e) => setSpeed(e.target.value)}
      ></input>
      <label for="speed-input">rotations/sec</label>
    </>
  );
}
