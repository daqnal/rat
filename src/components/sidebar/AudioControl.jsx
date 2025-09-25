export default function AudioControl({ togglePlayPause, isPlaying }) {
  return (
    <div id="audio-control-buttons-container">
      <button
        className="control-button control-inner-button"
        onClick={togglePlayPause}
      >
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>

      {/* <button
        className="control-button control-inner-button"
      >
        ↺ Restart
      </button>*/}
    </div>
  );
}
