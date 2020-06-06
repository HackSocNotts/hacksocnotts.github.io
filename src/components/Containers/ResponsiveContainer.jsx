import PropTypes from 'prop-types';
import React from 'react';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const defaultProps = {
  background: {
    overlay: null,
    image: null,
    fullHeight: false,
  },
};

const ResponsiveContainer = ({ children, heading, background } = defaultProps) => (
  <div>
    <DesktopContainer heading={heading} background={background}>
      {children}
    </DesktopContainer>
    <MobileContainer heading={heading} background={background}>
      {children}
    </MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.func,
  background: PropTypes.shape({
    overlay: PropTypes.string,
    image: PropTypes.string,
    fullHeight: PropTypes.bool,
  }),
};

export default ResponsiveContainer;
