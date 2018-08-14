import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import 'styling/semantic.less';
import { HomePage, NewsPage, EventsPage, CalendarPage, EventPage } from './components';
import { store, history } from './store';
import { loadEvents } from './store/actions/events';
import { loadNews } from './store/actions/news';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/news' component={NewsPage} />
        <Route path='/events' component={EventsPage} />
        <Route path='/calendar' component={CalendarPage} />
        <Route path='/event/:id' component={EventPage} />
        <Route component={HomePage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

// Dispatch OnLoad Actions
store.dispatch(loadEvents());
store.dispatch(loadNews());

export default App;
