import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(combineReducers(reducers),
  compose(
    applyMiddleware(thunk),
    devTools,
  ));

export default store;
