const stopWatchView = document.querySelector('#stop-watch-view');
const toggleStopWatchButton = document.querySelector('#toggle-stop-watch');
toggleStopWatchButton.addEventListener('click', toggleStopWatch);

const resetButton = document.querySelector('#reset-stop-watch');
resetButton.addEventListener('click', resetStopWatch);

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

function resetStopWatch() {
  hundredth = 0;
  seconds = 0;
  minutes = 0;
  displayTime();
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

function startStopWatch() {
  intervalId = setInterval(handleTimeChange, 10);
  toggleStopWatchButton.innerHTML = 'Stop';
}

function stopStopWatch() {
  clearInterval(intervalId);
  toggleStopWatchButton.innerHTML = 'Start';
  intervalId = null;
}

let intervalId = null;
function toggleStopWatch() {
  if (intervalId == null) {
    startStopWatch();
  } else {
    stopStopWatch();
  }
}
