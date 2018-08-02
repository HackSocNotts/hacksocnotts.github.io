import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'styling/semantic.less'
import { Navbar, HomePage, NewsPage, EventsPage, CalendarPage } from './components';
import 'styling/semantic.less';

const leftItems = [
  {
    as: Link,
    to: '/news',
    content: 'News',
    icon: 'newspaper outline',
    key: 'news',
  },
  {
    as: Link,
    to: '/events',
    content: 'Events',
    icon: 'calendar alternate outline',
    key: 'events',
  },
]
const rightItems = [
  {
    as: 'a',
    content: 'HackNotts',
    href: 'https://hacknotts.com',
    icon: 'chess rook',
    key: 'hacknotts',
    target: '_blank',
  },
]


const App = () => (
    <BrowserRouter>
      <Navbar leftItems={leftItems} rightItems={rightItems}>
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

export default App
