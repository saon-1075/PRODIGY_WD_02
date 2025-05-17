let startTime, updatedTime, difference = 0;
let timerInterval;
let isRunning = false;
let lapCounter = 1;

const display = document.getElementById('display');
const lapsContainer = document.getElementById('laps');

function updateDisplay() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(difference / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = difference % 1000;

  display.textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${padMilli(milliseconds)}`;
}

function pad(num) {
  return num < 10 ? '0' + num : num;
}

function padMilli(num) {
  return num.toString().padStart(3, '0');
}

function start() {
  if (!isRunning) {
    startTime = new Date().getTime() - difference;
    timerInterval = setInterval(updateDisplay, 10);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timerInterval);
  isRunning = false;
}

function reset() {
  clearInterval(timerInterval);
  difference = 0;
  isRunning = false;
  lapCounter = 1;
  display.textContent = '00:00:00.000';
  lapsContainer.innerHTML = '';
}

function lap() {
  if (isRunning) {
    const li = document.createElement('li');
    li.textContent = `Lap ${lapCounter++}: ${display.textContent}`;
    lapsContainer.appendChild(li);
  }
}

function reset() {
  clearInterval(timerInterval);
  difference = 0;
  isRunning = false;
  display.textContent = '00:00:00';
  lapsContainer.innerHTML = '';
}

function lap() {
  if (isRunning) {
    const li = document.createElement('li');
    li.textContent = display.textContent;
    lapsContainer.appendChild(li);
  }
}
