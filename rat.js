// handle counter
window.onload = function start() {

  changeSpeed();
}


let count = 0;

function increaseCounter() {
  count++
  document.querySelector('#counter-display').innerHTML = count;
}


function updateCounter() {

  // Get the computed styles of the root element
  var style = getComputedStyle(document.body);

  // Get the value of the --speed variable
  let ms = style.getPropertyValue('--speed').slice(0, -1) * 1000;
  console.log(ms)

  counterIntervalId = window.setInterval(increaseCounter, ms);

  return counterIntervalId;
}


function changeSpeed() {
  let speedChanger = document.querySelector("#speed-changer");

  // Listen for changes to form fields
  speedChanger.addEventListener('change', () => {
    let speedChangerValue = speedChanger.value;
    let seconds = 4 / speedChangerValue;
    document.documentElement.style.setProperty("--speed", `${seconds}s`)
    console.log(updateCounter());
    clearInterval(updateCounter());
    updateCounter();
  });
}


// handle audio playback

function play(playButton) {
  var audio = document.getElementById("audio");
  audio.play();
  // delete the button after enabling
  document.getElementById("play-button").remove();
}

// if the play button hasn't been clicked after 15 seconds, remove it
// setTimeout(function() {document.getElementById("play-button").remove()}, 15000);