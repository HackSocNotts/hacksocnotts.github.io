import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'styling/semantic.less';
import { HomePage, NewsPage, EventsPage, CalendarPage } from './components';
import { store } from './store';
import { loadEvents } from './store/actions/events';
import { loadNews } from './store/actions/news';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/news' component={NewsPage} />
      <Route path='/events' component={EventsPage} />
      <Route path='/calendar' component={CalendarPage} />
      <Route component={HomePage} />
    </Switch>
  </BrowserRouter>
);

// Dispatch OnLoad Actions
store.dispatch(loadEvents());
store.dispatch(loadNews());

export default App;
