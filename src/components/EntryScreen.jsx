import Ratscii from "/rat.txt?raw";

export default function Entry({ toggleRat }) {
  return (
    <div id="entry-container">
      <p id="ratscii">{Ratscii}</p>
      <button id="entry-button" onClick={() => toggleRat(true)}>
        <span>
          enter <b id="the-rat-text">the rat</b>
        </span>
      </button>
    </div>
  );
}
