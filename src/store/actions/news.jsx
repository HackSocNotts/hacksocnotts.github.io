import { newsService } from '../../services';

/**
 * action types
 */

export const LOAD_NEWS = 'LOAD_NEWS';
export const LOAD_NEWS_REQUEST = 'LOAD_NEWS_REQUEST';
export const LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS';
export const LOAD_NEWS_FAILURE = 'LOAD_NEWS_FAILURE';

/**
 * action creators
 */

export function loadNewsRequests() {
  return {
    type: LOAD_NEWS_REQUEST,
  };
}

export function loadNewsSuccess(news) {
  return {
    type: LOAD_NEWS_SUCCESS,
    payload: news,
  };
}

export function loadNewsFailure(error) {
  return {
    type: LOAD_NEWS_FAILURE,
    error,
  };
}

export function loadNews() {
  // Function for the Thunk middleware
  return (dispatch) => {
    dispatch({ type: LOAD_NEWS });
    // Let REDUX now that load news has been requested
    dispatch(loadNewsRequests());

    newsService
      .retrievePosts()
      .then((news) => dispatch(loadNewsSuccess(news)))
      .catch((error) => dispatch(loadNewsFailure(error)));
  };
}
