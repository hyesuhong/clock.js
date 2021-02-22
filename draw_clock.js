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
            <span class="digital_hours"></span>&colon;<span class="digital_minutes"></span>&colon;<span class="digital_seconds"></span>
          </h1>
          <ul class="digital_weeks">
            <li>SUN</li>
            <li>MON</li>
            <li>TUE</li>
            <li>WED</li>
            <li>THU</li>
            <li>FRI</li>
            <li>SAT</li>
          </ul>
        `;
        break;

      case clockType.analog:
        wrapper.setAttribute('class', 'analog_wrapper');

        wrapper.innerHTML = `
          <div class="analog_clock_hands">
            <div class="analog_hours"></div>
            <div class="analog_minutes"></div>
            <div class="analog_seconds"></div>
          </div>
        `;
        break;
    }

    this.container.appendChild(wrapper);
  }
}
