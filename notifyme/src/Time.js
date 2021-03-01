const Time = {
  SetTimeDefined() {
    const sendButton = document.querySelector('#sendButton');
    const hoursSelect = document.querySelector('#hoursSelect');
    const minutesSelect = document.querySelector('#minutesSelect');
    sendButton.addEventListener('click', () => {
      let valueHour = hoursSelect.value;
      let valueMinutes = minutesSelect.value;
      if (Number(hoursSelect.value) < 10) {
       valueHour = `0${hoursSelect.value}`;
      }
      if (Number(minutesSelect.value) < 10) {
        valueMinutes = `0${minutesSelect.value}`;
      }
      const time = `${valueHour}:${valueMinutes}:00`;
      localStorage.setItem('time',time);
    });
  },
  getTimeDefined(){
    if(localStorage.getItem('time')) return localStorage.getItem('time');
    else localStorage.setItem('time', '0');
  }
}

export { Time };