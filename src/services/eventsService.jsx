import * as eventsManifest from '_events/eventsManifest.json';

const retrieveEvents = () => {
  const promises = eventsManifest.events.map(async (event) => {
    const eventDate = new Date(event.date);
    const now = new Date();

    if (now > eventDate) {
      return;
    }

    try {
      const description = await import(`../_events/${event.description}`);
      return Promise.resolve({
        ...event,
        description,
      });
    } catch (err) {
      return Promise.reject(err);
    }
  });

  return Promise.all(promises);
};

export default {
  retrieveEvents,
};
