import eventsReducer from './eventsReducer';
import newsReducer from './newsReducer';
import navigationReducer from './navigationReducer';

const reducers = {
  events: eventsReducer,
  news: newsReducer,
  navigation: navigationReducer,
};

export { eventsReducer, newsReducer, navigationReducer };

export default reducers;
