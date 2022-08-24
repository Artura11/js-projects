function Timer(initialTime) {
    this.initialTime = initialTime;

    this.createTimer = function () {
        console.log('create timer');
    }
}

export default Timer;