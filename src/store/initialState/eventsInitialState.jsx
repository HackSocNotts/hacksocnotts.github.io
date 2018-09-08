import Moment from 'moment';

const eventsInitialState = {
  items: [],
  activeEvent: {
    name: 'Loading...',
    start: new Moment(),
    end: new Moment(),
    location: 'Loading...',
    summary: 'Loading...',
    description: 'Loading...',
    banner: 'Loading...',
  },
  count: 0,
};

export default eventsInitialState;
