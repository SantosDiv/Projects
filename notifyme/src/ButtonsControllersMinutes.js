const ButtonsControllersMinute = {
  control() {
    const buttonUpMinutes = document.querySelector('#up-minutes');
    const buttonDownMinutes = document.querySelector('#down-minutes');
    buttonUpMinutes.addEventListener('click', ButtonsControllersMinute.control);
    buttonDownMinutes.addEventListener('click', this.engineMove);
  },
}

export { ButtonsControllersMinute };