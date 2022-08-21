
const stopWatchView = document.querySelector('#stop-watch-view');

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


function toggleStopWatch() {
    setInterval(handleTimeChange, 10);
}

document.querySelector('#toggle-stop-watch').addEventListener('click', startStopWatch);