
const stopWatchView = document.querySelector('#stop-watch-view');
const toggleStopWatchButton = document
    .querySelector('#toggle-stop-watch').addEventListener('click', toggleStopWatch);

let hundreth = 0;
let seconds = 0;
let minutes = 0;

function displayTime() {
    // stopWatchView.innerHTML = minutes + ':' + seconds + ':' + hundreth;

    stopWatchView.innerHTML = `${minutes}:${seconds}:${hundreth}`;
}


function handleTimeChange() {
    hundreth++;
    if (hundreth > 99) {
        hundreth = 0;
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
    if (intervalId == null) {
        intervalId = setInterval(handleTimeChange, 10);
        toggleStopWatchButton.innerHTML = 'Stop';
    } else {
        clearInterval(intervalId);
        toggleStopWatchButton.innerHTML = 'Start';
        intervalId = null;

    }
}
