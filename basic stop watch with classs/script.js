class StopWatch {
    constructor() {
        this.duration = 0;
        this.intervalId = null;
    }

    start() {
        if (this.intervalId) {
            console.error('Stopwatch is already running.');
            return;
        }
        this.intervalId = setInterval(() => {
            this.duration++;
        }, 1000);
    }

    stop() {
        if (!this.intervalId) {
            console.error('Stopwatch is not running.');
            return;
        }
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    reset() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.duration = 0;
    }
}