import * as moment from 'moment';
import { eventsService } from '../../services';
import waitForState from '../waitForState';

/**
 * action types
 */

export const LOAD_EVENTS = 'LOAD_EVENTS';
export const LOAD_EVENTS_REQUEST = 'LOAD_EVENTS_REQUEST';
export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
export const LOAD_EVENTS_FAILURE = 'LOAD_EVENTS_FAILURE';
export const ACTIVATE_EVENT = 'ACTIVATE_EVENT';
export const ACTIVATE_EVENT_WAITING = 'ACTIVATE_EVENT_WAITING';
export const ACTIVATE_EVENT_SUCCESS = 'ACTIVATE_EVENT_SUCCESS';
export const ACTIVATE_EVENT_FAILURE = 'ACTIVATE_EVENT_FAILURE';

/**
 * action creators
 */

export function loadEventsRequest() {
  return {
    type: LOAD_EVENTS_REQUEST,
  };
}

export function loadEventsSuccess(events, futureEvents) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    payload: {
      events,
      futureEvents,
    },
  };
}

export function loadEventsFailure(error) {
  return {
    type: LOAD_EVENTS_FAILURE,
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack,
    },
  };
}

export function loadEvents() {
  // Function for the Thunk middleware
  return (dispatch) => {
    dispatch({ type: LOAD_EVENTS });
    // Let REDUX know that load events has been requested
    dispatch(loadEventsRequest());

    eventsService.retrieveEvents()
      .then((events) => {
        const now = moment();
        const futureEvents = events.filter((event) => {
          const eventDate = moment(event.start);
          return (now.isBefore(eventDate));
        });
        dispatch(loadEventsSuccess(events, futureEvents));
      })
      .catch(error => dispatch(loadEventsFailure(error)));
  };
}

export function activateEventWaiting() {
  return {
    type: ACTIVATE_EVENT_WAITING,
  };
}

export function activateEventSuccess(eventId) {
  return {
    type: ACTIVATE_EVENT_SUCCESS,
    payload: eventId,
  };
}

export function activateEventFailure(error) {
  return {
    type: ACTIVATE_EVENT_FAILURE,
    error,
  };
}

export function activateEvent(eventId) {
  return (dispatch) => {
    dispatch({
      type: ACTIVATE_EVENT,
      payload: eventId,
    });

    dispatch(activateEventWaiting());

    waitForState(state => state.events.items.length > 0)
      .then(() => dispatch(activateEventSuccess(eventId)))
      .catch(error => dispatch(activateEventFailure(error)));
  };
}
