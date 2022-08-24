import Timer from './timers.js';

document.querySelector('#create-timer').addEventListener('click', addTimer);
const timerInput = document.querySelector('#time-input');

function addTimer() {
    const initialTime = timerInput.value;
    const timer = new Timer(initialTime);
    timer.createTimer();
}