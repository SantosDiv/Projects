import { Notify } from './Notify.js';
import { Time } from './Time.js';

const App = {
  async start(definedTime) {
    try {
      await Notify.init();
      Time.init(definedTime);
    } catch (error) {
      console.log(error.message);
    }
  },
}

export { App };