import React from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import Footer from './Footer';
import '../assets/less/semantic.less';

const Container = (children, ...props) => {
  return (
    <>
      <DesktopContainer {...props}>
        {children}
        <Footer />
      </DesktopContainer>
      <MobileContainer {...props}>
        {children}
        <Footer />
      </MobileContainer>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.func.isRequired,
  background: PropTypes.shape({
    overlay: PropTypes.string,
    image: PropTypes.string,
    fullHeight: PropTypes.bool,
  }),
};

Container.defaultProps = {
  background: {
    overlay: null,
    image: null,
    fullHeight: false,
  },
};

export default Container;
