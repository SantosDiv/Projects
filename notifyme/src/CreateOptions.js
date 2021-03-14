const CreateOptions = {
  ofSelect(idElement) {
    const select = document.querySelector(`#${idElement}`);
    let numbersClock = 0;
    if (idElement === 'hoursSelect') numbersClock = 24;
    if (idElement === 'minutesSelect') numbersClock = 60;
    for(let index = 0; index < numbersClock; index += 1) {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = index;
      select.appendChild(option);
    }
  }
}

export { CreateOptions };