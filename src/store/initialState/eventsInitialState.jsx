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
    bgcolor: '#56b446',
  },
  count: 0,
};

export default eventsInitialState;
