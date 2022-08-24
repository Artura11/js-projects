function Timer(initialTime) {
    this.initialTime = initialTime;

    this.createTimer = function () {
        const timersContainer = document.querySelector('#timers-container');
        timersContainer.innerHTML += '<div>new timer</div>'

    }
}

export default Timer;