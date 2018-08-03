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
      content: 'HackNotts',
      href: 'https://hacknotts.com',
      icon: 'chess rook',
      key: 'hacknotts',
      target: '_blank',
    },
  ],
  pusher: {
    visible: false,
  },
};

export default navigationInitialState;
