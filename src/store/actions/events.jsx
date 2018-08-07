import { eventsService } from '../../services';

/**
 * action types
 */

export const LOAD_EVENTS = 'LOAD_EVENTS';
export const LOAD_EVENTS_REQUEST = 'LOAD_EVENTS_REQUEST';
export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
export const LOAD_EVENTS_FAILURE = 'LOAD_EVENTS_FAILURE';

/**
 * action creators
 */

export function loadEventsRequest() {
  return {
    type: LOAD_EVENTS_REQUEST,
  };
}

export function loadEventsSuccess(events) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    payload: events,
  };
}

export function loadEventsFailure(error) {
  return {
    type: LOAD_EVENTS_FAILURE,
    errror: error,
  };
}

export function loadEvents() {
  // Function for the Thunk middleware
  return (dispatch) => {
    // Let REDUX know that load events has been requested
    dispatch(loadEventsRequest());

    eventsService.retrieveEvents()
      .then(events => dispatch(loadEventsSuccess(events)))
      .catch(error => dispatch(loadEventsFailure(error)));
  };
}
