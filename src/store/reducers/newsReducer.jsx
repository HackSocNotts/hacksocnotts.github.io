import { newsInitialState } from '../initialState';
import { LOAD_NEWS_FAILURE, LOAD_NEWS_SUCCESS } from '../actions/news';

const reducer = (state = newsInitialState, action) => {
  const newState = { ...state };
  switch (action.type) {

    case LOAD_NEWS_SUCCESS:
      newState.items = action.payload;
      newState.count = action.payload.length;
      break;

    case LOAD_NEWS_FAILURE:
      newState.error = action.error;
      break;

    default:
      break;
  }
  return newState;
};

export default reducer;
