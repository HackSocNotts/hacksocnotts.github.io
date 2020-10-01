import React from 'react';
import NavItemType from '../types/NavItem';
import NavItem from './NavItem';

const navItems: NavItemType[] = [
  {
    to: '/',
    content: 'Home',
  },
  {
    to: '/news',
    content: 'News',
  },
  {
    to: '/events',
    content: 'Events',
  },
  {
    to: '/calendar',
    content: 'Calendar',
  },
  {
    to: 'https://hacksoc.net/join',
    content: 'Join',
  },
  {
    to: 'https://hacknotts.com',
    content: 'HackNotts',
  },
];

const Navigation = () => {
  return (
    <nav id="nav">
      <ul>
        {navItems.map((item, i) => (
          <NavItem item={item} key={i} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
