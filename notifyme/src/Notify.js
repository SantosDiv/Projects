const Notify = {
  async init() {
    const permision = await Notification.requestPermission();
    if (permision !== 'granted') throw new Error('A permissão foi negada');
  },
  notify({ title, body }) {
    new Notification(title, {
      body,
    });
  },
}

export { Notify };