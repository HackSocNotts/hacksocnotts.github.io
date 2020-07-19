import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Responsive, Visibility, Segment } from 'semantic-ui-react';

import { container, desktopSegment } from '../assets/less/container.less';
import Navigation from './Navigation';

const DesktopContainer = ({ heading, children, background }) => {
  const [fixed, setFixed] = useState(false);

  const segmentStyles = {};
  if (background.image) {
    segmentStyles.background = `linear-gradient(${background.overlay}, ${background.overlay}).
    url(${background.image}) center / cover no-repeat`;
  }
  if (background.fullHeight) {
    segmentStyles.minHeight = '100vh';
  }
  if (background.halfHeight) {
    segmentStyles.minHeight = '50vh';
  }

  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth} className={container}>
      <Visibility once={false} onBottomPassed={() => setFixed(true)} onBottomPassedReverse={() => setFixed(false)}>
        <Segment inverted textAlign="center" className={desktopSegment} style={segmentStyles} vertical>
          <Navigation fixed={fixed} />
          {heading()}
        </Segment>
      </Visibility>
      {children}
    </Responsive>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.func.isRequired,
  background: PropTypes.shape({
    overlay: PropTypes.string,
    image: PropTypes.string,
    fullHeight: PropTypes.bool,
    halfHeight: PropTypes.bool,
  }),
};

DesktopContainer.defaultProps = {
  background: {
    overlay: null,
    image: null,
    fullHeight: false,
  },
};

export default DesktopContainer;
