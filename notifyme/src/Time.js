import { Notify } from './Notify.js';

const Time = {
  init(definedTime) {
    setInterval(() => { this.timeDisplay(definedTime) }, 1000);
  },
  async timeDisplay(definedTime) {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const spanDisplay = document.querySelector('.time');
    spanDisplay.textContent = time;
    if (time === definedTime) {
      Notify.notify({
        title: 'Lembrete trybe',
        body: 'Form please',
      });
    }
  },
}

export { Time };