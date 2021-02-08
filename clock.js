'use strict';

// time boxes
const time_period = document.querySelector('#PERIOD');
const hours_box = document.querySelector('#HOURS');
const minutes_box = document.querySelector('#MINUTES');
const seconds_box = document.querySelector('#SECONDS');
const weeks = document.querySelector('#WEEKS');

function addZero(num) {
  num < 10 ? (num = '0' + num) : (num = num);
  return num;
}

setInterval(() => {
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
}, 1000);
