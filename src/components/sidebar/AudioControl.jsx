export default function AudioControl({ togglePlayPause, isPlaying }) {
  return (
    <button
      className="control-button control-inner-button"
      id="toggle-play-pause-button"
      onClick={togglePlayPause}
    >
      {isPlaying ? "⏸ Pause" : "▶ Play"}
    </button>
  );
}
