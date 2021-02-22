const refs = {
    timerRef: document.querySelector('#timer-1'),
    daysRef: document.querySelector('[data-value="days"]'),
    hoursRef: document.querySelector('[data-value="hours"]'),
    minsRef: document.querySelector('[data-value="mins"]'),
    secsRef: document.querySelector('[data-value="secs"]'),
}

const timer = {
    start() {
        const targetDate = new Date(2021, 2, 1, 0, 0)

        setInterval(() => {
            const currentTime = Date.now();

            const deltaTime = targetDate - currentTime;

            updateTimer(deltaTime);
        }, 1000)
    }
}

timer.start();

function updateTimer(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.timerRef.textContent = `${days}:${hours}:${mins}:${secs}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}