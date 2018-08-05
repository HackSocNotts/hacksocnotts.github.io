import { Link } from 'react-router-dom';

const navigationInitialState = {
  leftItems: [
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
  ],
  rightItems: [
    {
      as: 'a',
      content: 'inspireWiT',
      href: 'http://inspirewit.com',
      key: 'inspirewit',
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'ui purple',
    },
    {
      as: 'a',
      content: 'HackNotts',
      href: 'https://hacknotts.com',
      icon: 'chess rook',
      key: 'hacknotts',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
  pusher: {
    visible: false,
  },
  navbar: {
    fixed: false,
  },
};

export default navigationInitialState;
