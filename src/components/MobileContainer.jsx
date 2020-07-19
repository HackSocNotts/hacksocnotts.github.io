import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Responsive, Sidebar, Menu, Segment, Container, Icon } from 'semantic-ui-react';

import { container, mobileSegment, sidebarPusher } from '../assets/less/container.less';
import Navigation from './Navigation';

const MobileContainer = ({ children, heading, background }) => {
  const [sidebarOpened, setSidebarState] = useState(false);

  const closeSidebar = () => setSidebarState(false);
  const toggleSidebar = () => setSidebarState(!sidebarOpened);

  const segmentStyles = {};
  if (background.image) {
    segmentStyles.background = `linear-gradient(${background.overlay}, ${background.overlay}),
      url(${background.image}) no-repeat`;
  }

  return (
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth} className={container}>
      <Sidebar.Pushable>
        <Navigation mobile={true} sidebarOpened={sidebarOpened} />
        <Sidebar.Pusher dimmed={sidebarOpened} onClick={closeSidebar} className={sidebarPusher}>
          <Segment inverted textAlign="center" className={mobileSegment} style={segmentStyles} vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={toggleSidebar}>
                  <Icon name="sidebar" />
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
};

MobileContainer.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.func.isRequired,
  background: PropTypes.shape({
    overlay: PropTypes.string,
    image: PropTypes.string,
    fullHeight: PropTypes.bool,
    halfHeight: PropTypes.bool,
  }),
};

MobileContainer.defaultProps = {
  background: {
    overlay: null,
    image: null,
    fullHeight: false,
  },
};

export default MobileContainer;
