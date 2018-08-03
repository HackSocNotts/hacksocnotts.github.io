import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'styling/semantic.less';
import { Navbar, HomePage, NewsPage, EventsPage, CalendarPage } from './components';

const App = () => (
  <BrowserRouter>
    <Navbar>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/news' component={NewsPage} />
        <Route path='/events' component={EventsPage} />
        <Route path='/calendar' component={CalendarPage} />
        <Route component={HomePage} />
      </Switch>
    </Navbar>
  </BrowserRouter>
);

export default App;
