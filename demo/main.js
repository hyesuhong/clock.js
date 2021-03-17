'use strict';

import Clock from '../clock.js';

// clock change buttons
const btn_area = document.querySelector('.btn_area');

// clock container
const digital_container = document.querySelector('#DIGITAL_CLOCK');
const analog_container = document.querySelector('#ANALOGUE_CLOCK');

let digitalClock = new Clock('digital', 'DIGITAL_CLOCK');
let analogClock = new Clock('analog', 'ANALOGUE_CLOCK');

btn_area.addEventListener('click', (e) => {
  if (e.target.id === 'DIGITAL_BTN') {
    analog_container.style.display = 'none';
    digital_container.style.display = 'block';
    document.querySelector('#DIGITAL_BTN').classList.add('active');
    document.querySelector('#ANALOGUE_BTN').classList.remove('active');
  } else if (e.target.id === 'ANALOGUE_BTN') {
    analog_container.style.display = 'block';
    digital_container.style.display = 'none';
    document.querySelector('#DIGITAL_BTN').classList.remove('active');
    document.querySelector('#ANALOGUE_BTN').classList.add('active');
  }
});

document.querySelector('#ANALOGUE_BTN').click();
