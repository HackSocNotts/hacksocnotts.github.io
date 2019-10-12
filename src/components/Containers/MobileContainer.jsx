import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { Responsive,
  Sidebar,
  Menu,
  Segment,
  Container,
  Icon } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import * as styles from './MobileContainer.less';

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  }

  handleToggle = () => {
    const { sidebarOpened } = this.state;

    this.setState({ sidebarOpened: !sidebarOpened });
  }

  render() {
    const {
      children,
      heading,
      leftItems,
      rightItems,
      background,
    } = this.props;
    const { sidebarOpened } = this.state;

    const segmentStyles = {};
    if (background.image) {
      segmentStyles.background = `linear-gradient(${background.overlay}, ${background.overlay}),
      url(${background.image}) no-repeat`;
    }

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth} className={styles.container}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='uncover'
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as={Link} to='/' active={window.location.pathname === '/'}>
              Home
            </Menu.Item>
            {_.map(leftItems, item => <Menu.Item {...item} active={window.location.pathname === item.to} />)}
            {_.map(rightItems, item => <Menu.Item {...item} />)}
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            className={styles.sidebarPusher}
          >
            <Segment
              inverted
              textAlign='center'
              className={styles.segment}
              style={segmentStyles}
              vertical
            >
              <Container>
                <Menu
                  inverted
                  pointing
                  secondary
                  size='large'
                >
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
              {heading({ mobile: true })}
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
  leftItems: PropTypes.arrayOf(PropTypes.object),
  rightItems: PropTypes.arrayOf(PropTypes.object),
  heading: PropTypes.func,
  background: PropTypes.shape({
    overlay: PropTypes.string,
    image: PropTypes.string,
    fullHeight: PropTypes.bool,
  }),
};

/* eslint-disable arrow-body-style */
const mapStateToProps = (state) => {
  return {
    leftItems: state.navigation.leftItems,
    rightItems: state.navigation.rightItems,
    fixed: state.navigation.navbar.fixed,
  };
};

const mapDispatchToProps = () => {
  return {

  };
};
/* eslint-enable */

export default connect(mapStateToProps, mapDispatchToProps)(MobileContainer);
