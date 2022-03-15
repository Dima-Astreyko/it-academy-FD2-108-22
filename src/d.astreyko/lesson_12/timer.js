const TIMER_INTERVAL_MS = 20;

class Timer {
  spentMilliseconds;

  constructor(timerElement) {
    this.timerElement = timerElement;
  }

  start() {
    this.intervalId = setInterval(() => this.onTick(), TIMER_INTERVAL_MS);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.stop();
    this.spentMilliseconds = 0;
    this.showTime();
  }

  onTick() {
    this.spentMilliseconds -= TIMER_INTERVAL_MS;
    if (this.spentMilliseconds <= 0) {
      this.stop();
      this.spentMilliseconds = 0;
    }
    this.showTime();
  }

  showTime() {
    const seconds = (this.spentMilliseconds / 1000) % 60 + '';
    const minutes = Math.floor((this.spentMilliseconds / 1000) / 60) + '';
    this.timerElement.textContent = `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }

  addTime(mill) {
    this.spentMilliseconds += mill;
    this.showTime();
  }

  setTime(mill) {
    this.spentMilliseconds = mill;
    this.showTime();
  }
}
