import { Time } from './Time.js';

const Notify = {
  async init() {
    const permision = await Notification.requestPermission();
    if (permision !== 'granted') throw new Error('A permissão foi negada');
  },
  notify({ title, body, definedTime }) {
    if (Time.date() === definedTime) {
      new Notification(title, {
        body,
      });
    }
  },
}

export { Notify };