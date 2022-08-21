
const stopWatchView = document.querySelector('#stop-watch-view');
const toggleStopWatchButton = document.querySelector('#toggle-stop-watch');
toggleStopWatchButton.addEventListener('click', toggleStopWatch);

const resetButton = document.getElementById('reset-stop-watch');
resetButton.addEventListener("click", resetStopWatch);

let hundreth = 0;
let seconds = 0;
let minutes = 0;

function displayTime() {
    // stopWatchView.innerHTML = minutes + ':' + seconds + ':' + hundreth;

    stopWatchView.innerHTML = `${minutes}:${seconds}:${hundreth}`;
}

function resetStopWatch() {
    hundreth = 0;
    seconds = 0;
    minutes = 0;

    displayTime();
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


