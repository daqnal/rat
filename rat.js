
// handle counter
window.onload = function start() {

  counter();
}

let count = BigInt(0);

function counter() {
  let counterDisplayElem = document.querySelector('.counter-display');

  window.setInterval(function () {
    count++
    counterDisplayElem.innerHTML = count;
  }, 4000);
}

// handle gapless audio playback

function play(playButton) {
  var audio = document.getElementById("audio");
  audio.play();
  // delete the button after enabling
  document.getElementById("play-button").remove();
}

// if the play button hasn't been clicked after 15 seconds, remove it
setTimeout(function() {document.getElementById("play-button").remove()}, 15000);