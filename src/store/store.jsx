import { createBrowserHistory } from 'history';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';

const history = createBrowserHistory();

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(connectRouter(history)(combineReducers(reducers)),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
    devTools,
  ));

export { history };
export default store;
