'use strict';

export const clockType = Object.freeze({
  analog: 'analog',
  digital: 'digital',
});

export class DrawClock {
  constructor(type, container) {
    this.type = type;
    this.container = document.getElementById(`${container}`);
  }

  insertClockElements() {
    const wrapper = document.createElement('div');

    switch (this.type) {
      case clockType.digital:
        wrapper.setAttribute('class', 'digital_wrapper');

        wrapper.innerHTML = `
          <p class="digital_meridiem"></p>
          <h1 class="digital_time_text">
            <span class="digital_hours digital_time"></span>&colon;<span class="digital_minutes digital_time"></span>&colon;<span class="digital_seconds digital_time"></span>
          </h1>
          <ul class="digital_weeks">
            <li class="week_text">SUN</li>
            <li class="week_text">MON</li>
            <li class="week_text">TUE</li>
            <li class="week_text">WED</li>
            <li class="week_text">THU</li>
            <li class="week_text">FRI</li>
            <li class="week_text">SAT</li>
          </ul>
        `;
        break;

      case clockType.analog:
        wrapper.setAttribute('class', 'analog_wrapper');

        wrapper.innerHTML = `
          <div class="analog_clock_hands">
            <div class="clock_hand analog_hours"></div>
            <div class="clock_hand analog_minutes"></div>
            <div class="clock_hand analog_seconds"></div>
          </div>
        `;
        break;
    }

    this.container.appendChild(wrapper);
  }
}
