import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Sidebar, Container, Image, Menu } from 'semantic-ui-react';

import { noBorder } from '../assets/less/navigation.less';

const MenuItemsLeft = [
  {
    path: '/events',
    title: 'Events',
    icon: 'calendar alternative outline',
  },
  {
    path: '/calendar',
    title: 'Calendar',
    icon: 'calendar alternative outline',
  },
  {
    path: 'https://www.su.nottingham.ac.uk/societies/society/hack/',
    title: 'Join',
    icon: 'user secret',
  },
];

const MenuItemsRight = [
  {
    path: 'https://hackquarantine.com',
    title: 'Hack Quarantine',
    icon: 'home',
  },
  {
    path: 'https://hacknotts.com',
    title: 'HackNotts',
    icon: 'chess rook',
  },
];

const isActive = (path) => window.location.pathname === path;

const makeMenuItemProps = ({ path, icon }) => {
  const external = path.substr(0, 4) === 'http';

  if (external) {
    return {
      as: 'a',
      icon,
      href: path,
      rel: 'noopener noreferrer',
      target: '_blank',
    };
  }

  return {
    as: Link,
    icon,
    to: path,
    active: isActive(path),
  };
};

const Navigation = ({ mobile, fixed, sidebarOpened }) => {
  if (mobile) {
    return (
      <Sidebar as={Menu} animation="uncover" inverted vertical visible={sidebarOpened}>
        <Menu.Item as={Link} to="/" active={isActive('/')} />
        {[...MenuItemsLeft, ...MenuItemsRight].map(({ title, ...item }) => (
          <Menu.Item {...makeMenuItemProps(item)} key={item.path}>
            {title}
          </Menu.Item>
        ))}
      </Sidebar>
    );
  }

  return (
    <Menu
      fixed={fixed ? 'top' : null}
      inverted
      pointing={!fixed}
      secondary={!fixed}
      size="large"
      color={!fixed ? 'white' : 'green'}
      className={!fixed ? noBorder : null}
    >
      <Container>
        <Menu.Item as={Link} to="/" active={isActive('/')}>
          {fixed ? <Image size="mini" src="/assets/logo.png" /> : 'Home'}
        </Menu.Item>
      </Container>
      {MenuItemsLeft.map(({ title, ...item }) => (
        <Menu.Item {...makeMenuItemProps(item)} key={item.path}>
          {title}
        </Menu.Item>
      ))}
      <Menu.Menu position="right">
        {MenuItemsRight.map(({ title, ...item }) => (
          <Menu.Item {...makeMenuItemProps(item)} key={item.path}>
            {title}
          </Menu.Item>
        ))}
      </Menu.Menu>
    </Menu>
  );
};

Navigation.propTypes = {
  mobile: PropTypes.bool,
  fixed: PropTypes.bool,
  sidebarOpened: PropTypes.bool,
};

Navigation.defaultProps = {
  mobile: false,
  fixed: false,
  sidebarOpened: false,
};

export default Navigation;
