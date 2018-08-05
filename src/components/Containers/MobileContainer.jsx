import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Responsive,
  Sidebar,
  Menu,
  Segment,
  Container,
  Icon } from 'semantic-ui-react';

import * as styles from './MobileContainer.less';
import HomePageHeading from '../pages/HomePage/HomePageHeading';

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
    const { chidlren, heading } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='uncover'
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
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

            {chidlren}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  chidlren: PropTypes.node,
  heading: PropTypes.func,
};

export default MobileContainer;
