import { Notify } from './Notify.js';

const App = {
  async start() {
    try {
      await Notify.init();
      Notify.notify({
        title: 'Lembrete trybe',
        body: 'Form please'
       })
    } catch (error) {
      console.log(error.message);
    }
  },
}

export { App };