import { ButtonsControllersMinute } from './ButtonsControllersMinutes.js';

const ButtonControllers = {
  getButton() {
    if(!localStorage.getItem('valueBottom')) localStorage.setItem('valueBottom', 50);
    else localStorage.setItem('valueBottom', 50);

    const buttonUpHours = document.querySelector('#up-hours');
    const buttonDownHours = document.querySelector('#down-hours');
    buttonDownHours.addEventListener('click', this.engineMove);
    buttonUpHours.addEventListener('click', this.engineMove);

    ButtonsControllersMinute.control();
  },
  engineMove({ target }) {
    const { value } = target;
    let acumulatorValue = 0;

    const numbers = document.querySelectorAll('.number');
    const listNumbers = document.querySelector('.list-minutes');
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index].classList.contains('selected')) {
        numbers[index].classList.remove('selected');

        if (value === 'up') {
          numbers[index - 1].classList.add('selected');
          acumulatorValue = Number(localStorage.getItem('valueBottom')) - 20;
        }
        if (value === 'down') {
          numbers[index + 1].classList.add('selected');
          acumulatorValue = Number(localStorage.getItem('valueBottom')) + 20;
        }

        listNumbers.style.bottom = `${acumulatorValue}%`;
        localStorage.setItem('valueBottom', acumulatorValue);
        return;
      }
    }
  }
}

export { ButtonControllers };