import { eventsInitialState } from '../initialState';
import { LOAD_EVENTS_SUCCESS, LOAD_EVENTS_FAILURE, ACTIVATE_EVENT_SUCCESS } from '../actions/events';

const reducer = (state = eventsInitialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOAD_EVENTS_SUCCESS:
      newState.items = action.payload.events;
      newState.futureItems = action.payload.futureEvents;
      newState.count = action.payload.length;
      break;

    case LOAD_EVENTS_FAILURE:
      newState.error = action.error;
      break;

    case ACTIVATE_EVENT_SUCCESS:
      /* eslint-disable prefer-destructuring */
      newState.activeEvent = state.items.filter((event) => event.id === action.payload)[0];
      break;

    default:
      break;
  }
  return newState;
};

export default reducer;
