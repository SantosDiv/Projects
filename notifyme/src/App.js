import { Notify } from './Notify.js';
import { TimeDisplay } from './TimeDisplay.js';
import { CreateOptions } from './CreateOptions.js';
import { Time } from './Time.js';

const App = {
  async start() {
    try {
      await Notify.init();

      CreateOptions.ofSelect('hoursSelect');
      CreateOptions.ofSelect('minutesSelect');

      Time.SetTimeDefined();
      const timeDefined = Time.getTimeDefined();

      TimeDisplay.init(timeDefined);
    } catch (error) {
      console.log(error.message);
    }
  },
}

export { App };