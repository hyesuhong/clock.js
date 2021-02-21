'use strict';

const clockType = Object.freeze({
  analog: 'analog',
  digital: 'digital',
});

class Clock {
  constructor(type, container) {
    this.type = type;
    this.container = document.getElementById(`${container}`);
  }

  getTime() {
    setInterval(() => {
      const today = new Date();
      const day = today.getDay();
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
    }, 1000);
  }

  insertClock() {}
}

// Digital time boxes
const digital_clock_wrap = document.querySelector('.digital');
const time_period = document.querySelector('#PERIOD');
const hours_box = document.querySelector('#HOURS');
const minutes_box = document.querySelector('#MINUTES');
const seconds_box = document.querySelector('#SECONDS');
const weeks = document.querySelector('#WEEKS');

// Analogue clock hands
const analogue_clock_wrap = document.querySelector('.analogue');
const hour_hand = document.querySelector('#HOUR_HAND');
const minutes_hand = document.querySelector('#MINUTE_HAND');
const seconds_hand = document.querySelector('#SECOND_HAND');

// clock change buttons
const btn_area = document.querySelector('.btn_area');

function addZero(num) {
  num < 10 ? (num = '0' + num) : (num = num);
  return num;
}

function digital_clock() {
  const today = new Date();
  const day = today.getDay();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  if (12 < hours) {
    hours_box.innerText = addZero(hours - 12);
    time_period.innerText = 'PM';
  } else {
    hours_box.innerText = addZero(hours);
    time_period.innerText = 'AM';
  }

  minutes_box.innerText = addZero(minutes);
  seconds_box.innerText = addZero(seconds);

  weeks.children[day].classList.add('on');
}

function analogue_clock() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  // hour hand
  let hour_degree = 30 * hours;
  hour_hand.style.transform = `translateX(-50%) rotate(${hour_degree}deg)`;

  // minute hand
  let minutes_degree = 6 * minutes;
  minutes_hand.style.transform = `translateX(-50%) rotate(${minutes_degree}deg)`;

  // second hand
  let seconds_degree = 6 * seconds;
  seconds_hand.style.transform = `translateX(-50%) rotate(${seconds_degree}deg)`;
}

digital_clock();

analogue_clock();

setInterval(() => {
  digital_clock();
  analogue_clock();
}, 1000);

btn_area.addEventListener('click', (e) => {
  if (e.target.id === 'DIGITAL_BTN') {
    analogue_clock_wrap.style.display = 'none';
    digital_clock_wrap.style.display = 'block';
    document.querySelector('#DIGITAL_BTN').classList.add('active');
    document.querySelector('#ANALOGUE_BTN').classList.remove('active');
  } else if (e.target.id === 'ANALOGUE_BTN') {
    analogue_clock_wrap.style.display = 'block';
    digital_clock_wrap.style.display = 'none';
    document.querySelector('#DIGITAL_BTN').classList.remove('active');
    document.querySelector('#ANALOGUE_BTN').classList.add('active');
  }
});

document.querySelector('#DIGITAL_BTN').click();
