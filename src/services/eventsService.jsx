import * as eventsManifest from '_events/eventsManifest.json';

const retrieveEvents = () => {
  const now = new Date();

  const events = eventsManifest.events.filter((event) => {
    const eventDate = new Date(event.start);
    return (now.getMonth() < eventDate.getMonth() || now.getFullYear() < eventDate.getFullYear());
  });

  const promises = events.map(async (event) => {
    try {
      const summary = await import(`../_events/${event.summary}`);
      const description = await import(`../_events/${event.description}`);
      return Promise.resolve({
        ...event,
        summary,
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
