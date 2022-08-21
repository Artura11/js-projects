
const stopWatchView = document.querySelector('#stop-watch-view');

let hundreth = 44;
let seconds = 34;
let minutes = 12;

function displayTime() {
    // stopWatchView.innerHTML = minutes + ':' + seconds + ':' + hundreth;

    stopWatchView.innerHTML = `${minutes}:${seconds}:${hundreth}`;
}


displayTime();