import { navigationIntialState } from '../initialState';

const reducer = (state = navigationIntialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'TOGGLE_MOBILE_NAVIGATION_PUSHER':
      newState.pusher.visible = !state.pusher.visible;
      break;

    case 'CLOSE_MOBILE_NAVIGATION_PUSHER':
      if (state.pusher.visible) newState.pusher.visible = false;
      break;

    case 'SHOW_FIXED_MENU':
      newState.navbar.fixed = true;
      break;

    case 'HIDE_FIXED_MENU':
      newState.navbar.fixed = false;
      break;

    default:
      break;
  }
  return newState;
};

export default reducer;
