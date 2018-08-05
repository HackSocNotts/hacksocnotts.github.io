import PropTypes from 'prop-types';
import React from 'react';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const ResponsiveContainer = ({ children, heading }) => (
  <div>
    <DesktopContainer heading={heading}>
      {children}
    </DesktopContainer>
    <MobileContainer heading={heading}>
      {children}
    </MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.func,
};

export default ResponsiveContainer;
