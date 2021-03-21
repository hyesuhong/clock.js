'use strict';

import { clockType, DrawClock } from './draw_clock.js';

export default class Clock {
  constructor(type, container) {
    this.type = type;
    this.container = container;

    this.clockwrapper = new DrawClock(this.type, this.container);
    this.clockwrapper.insertClockElements();

    // digital ver.
    this.digital_meridiem = document.querySelector('.digital_meridiem');
    this.digital_hours = document.querySelector('.digital_hours');
    this.digital_minutes = document.querySelector('.digital_minutes');
    this.digital_seconds = document.querySelector('.digital_seconds');
    this.digital_weeks = document.querySelector('.digital_weeks');

    // analog ver.
    this.analog_hours = document.querySelector('.analog_hours');
    this.analog_minutes = document.querySelector('.analog_minutes');
    this.analog_seconds = document.querySelector('.analog_seconds');

    switch (this.type) {
      case clockType.digital:
        this.digitalClock();
        setInterval(() => {
          this.digitalClock();
        }, 1000);
        break;

      case clockType.analog:
        this.analogClock();
        setInterval(() => {
          this.analogClock();
        });
        break;
    }
  }

  getTime() {
    const today = new Date();
    const day = today.getDay();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    return [day, hours, minutes, seconds];
  }

  addZero(num) {
    num < 10 ? (num = '0' + num) : (num = num);
    return num;
  }

  digitalClock() {
    if (12 < this.getTime()[1]) {
      this.digital_hours.innerText = this.addZero(this.getTime()[1] - 12);
      this.digital_meridiem.innerText = 'PM';
    } else {
      this.digital_hours.innerText = this.addZero(this.getTime()[1]);
      this.digital_meridiem.innerText = 'AM';
    }

    this.digital_minutes.innerText = this.addZero(this.getTime()[2]);
    this.digital_seconds.innerText = this.addZero(this.getTime()[3]);

    let weekends = Array.from(this.digital_weeks.children);
    weekends.forEach(function (element, index) {
      if (this.getTime()[0] === index) {
        element.classList.add('on');
      } else {
        element.classList.remove('on');
      }
    }, this);
    // this.digital_weeks.children.classList.remove('on');
    // this.digital_weeks.children[this.getTime()[0]].classList.add('on');
  }

  analogClock() {
    // hour hand
    let hour_degree = 30 * this.getTime()[1];
    this.analog_hours.style.transform = `translateX(-50%) rotate(${hour_degree}deg)`;

    // minute hand
    let minutes_degree = 6 * this.getTime()[2];
    this.analog_minutes.style.transform = `translateX(-50%) rotate(${minutes_degree}deg)`;

    // second hand
    let seconds_degree = 6 * this.getTime()[3];
    this.analog_seconds.style.transform = `translateX(-50%) rotate(${seconds_degree}deg)`;
  }
}
