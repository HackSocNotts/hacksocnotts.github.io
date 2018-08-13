import * as eventsManifest from '_events/eventsManifest.json';

const retrieveEvents = () => {
  const now = new Date();

  const events = eventsManifest.events.filter((event) => {
    const eventDate = new Date(event.date);
    return (now.getMonth() < eventDate.getMonth() || now.getFullYear() < eventDate.getFullYear());
  });

  const promises = events.map(async (event) => {
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
