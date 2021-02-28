import { Notify } from './Notify.js';

const App = {
  async start(definedTime) {
    try {
      await Notify.init();
      Notify.notify({
        title: 'Lembrete trybe',
        body: 'Form please',
        definedTime,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
}

export { App };