import * as moment from 'moment';
import * as eventsManifest from '_events/eventsManifest.json';

const retrieveEvents = () => {
  const events = eventsManifest;
  const promises = events.map(async (event) => {
    try {
      const summary = await import(`../_events/${event.summary}`);
      const description = await import(`../_events/${event.description}`);
      const banner = await import(`../_events/${event.banner}`);
      const start = moment(event.start);
      const end = moment(event.end);
      return Promise.resolve({
        ...event,
        start,
        end,
        summary,
        description,
        banner,
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
