const stopWatchView = document.querySelector('#stop-watch-view');
const toggleStopWatchButton = document.querySelector('#toggle-stop-watch');
toggleStopWatchButton.addEventListener('click', toggleStopWatch);

let hundredth = 0;
let seconds = 0;
let minutes = 0;

function displayTime() {
  let secondsString = seconds;
  if (seconds < 10) {
    secondsString = '0' + seconds;
  }
  let minutesString = minutes;
  if (minutes < 10) {
    minutesString = '0' + minutes;
  }
  // stopWatchView.innerHTML = minutes + ':' + seconds + ':' + hundreth;

  stopWatchView.innerHTML = `${minutesString}:${secondsString}:${hundreth}`;
}

function handleTimeChange() {
  hundredth++;
  if (hundredth > 99) {
    hundredth = 0;
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }
  }

  displayTime();
}

let intervalId = null;
function toggleStopWatch() {
  console.log('intervalId', intervalId);
  if (intervalId == null) {
    //start the stop watch
    intervalId = setInterval(handleTimeChange, 10);
    //button is top
    toggleStopWatchButton.innerHTML = 'Stop';
  } else {
    //stop the stop watch
    clearInterval(intervalId);
    toggleStopWatchButton.innerHTML = 'Start';
    intervalId = null;
  }
}
