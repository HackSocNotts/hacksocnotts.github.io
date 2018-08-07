import { eventsInitialState } from '../initialState';
import { LOAD_EVENTS_SUCCESS, LOAD_EVENTS_FAILURE } from '../actions/events';

const reducer = (state = eventsInitialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOAD_EVENTS_SUCCESS:
      newState.items = action.payload;
      newState.count = action.payload.length;
      break;

    case LOAD_EVENTS_FAILURE:
      newState.error = action.error;
      break;

    default:
      break;
  }
  return newState;
};

export default reducer;
