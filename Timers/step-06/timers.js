function Timer(initialTime) {
    this.initialTime = initialTime;

    this.createTimer = function () {
        const timersContainer = document.querySelector('#timers-container');
        const timerElement = document.createElement('div');
        timerElement.innerText = 'new timer with create element';

        timersContainer.appendChild(timerElement);

        //timersContainer.innerHTML += '<div>new timer</div>'

    };
}

export default Timer;