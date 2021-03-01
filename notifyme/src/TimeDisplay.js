import { Notify } from './Notify.js';

const TimeDisplay = {
  init(definedTime) {
    setInterval(() => {
      this.generateDisplayAndStartNotify(definedTime);
    }, 1000);
  },
  generateDisplayAndStartNotify(definedTime) {
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

export { TimeDisplay };