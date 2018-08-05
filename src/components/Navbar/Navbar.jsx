import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Responsive } from 'semantic-ui-react';

import NavbarChildren from './NavbarChildren';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

class NavBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    leftItems: PropTypes.arrayOf(PropTypes.object),
    rightItems: PropTypes.arrayOf(PropTypes.object),
    visible: PropTypes.bool,
    handlePusher: PropTypes.func,
    handleToggle: PropTypes.func,
  }

  /* eslint-disable react/destructuring-assignment */
  handlePusher = () => this.props.handlePusher();

  handleToggle = () => this.props.handleToggle();
  /* eslint-enable */

  render() {
    const {
      children,
      leftItems,
      rightItems,
      visible,
    } = this.props;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavbarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavbarChildren>
              {children}
            </NavbarChildren>
          </NavbarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavbarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavbarChildren>
            {children}
          </NavbarChildren>
        </Responsive>
      </div>
    );
  }
}

/* eslint-disable arrow-body-style */
const mapStateToProps = (state) => {
  return {
    leftItems: state.navigation.leftItems,
    rightItems: state.navigation.rightItems,
    visible: state.navigation.pusher.visible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggle: () => {
      dispatch({
        type: 'TOGGLE_MOBILE_NAVIGATION_PUSHER',
      });
    },
    handlePusher: () => {
      dispatch({
        type: 'CLOSE_MOBILE_NAVIGATION_PUSHER',
      });
    },
  };
};
/* eslint-enable */

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
