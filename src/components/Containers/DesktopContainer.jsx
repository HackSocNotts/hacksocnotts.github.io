import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { Responsive,
  Visibility,
  Segment,
  Container,
  Image,
  Menu } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import { COLORS } from 'semantic-ui-react/src/lib/SUI';

import logo from 'resources/logo.png';

import * as styles from './DesktopContainer.less';

// Add white to Menu colors
Menu.propTypes = {
  ...Menu.propTypes,
  color: PropTypes.oneOf([...COLORS, 'white']),
};

class DesktopContainer extends Component {
  componentWillMount() {
    const { hideFixedMenu } = this.props;

    hideFixedMenu();
  }

  render() {
    const {
      children,
      leftItems,
      rightItems,
      fixed,
      showFixedMenu,
      hideFixedMenu,
      heading,
      background,
    } = this.props;

    const segmentStyles = {};
    if (background.image) {
      segmentStyles.background = `linear-gradient(${background.overlay}, ${background.overlay}),
      url(${background.image}) no-repeat`;
    }
    if (background.fullHeight) {
      segmentStyles.minHeight = window.innerHeight;
    }

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={showFixedMenu}
          onBottomPassedReverse={hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            className={styles.segment}
            style={segmentStyles}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              color={!fixed ? 'white' : 'green'}
              className={!fixed ? styles.noBorder : null}
            >
              <Container>
                <Menu.Item as={Link} to='/' active={window.location.pathname === '/'}>
                  { fixed ? <Image size='mini' src={logo} /> : 'Home'}
                </Menu.Item>
                {_.map(leftItems, item => <Menu.Item {...item} active={window.location.pathname === item.to} />)}
                <Menu.Menu position='right'>
                  {_.map(rightItems, item => <Menu.Item {...item} />)}
                </Menu.Menu>
              </Container>
            </Menu>
            {heading()}
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
  leftItems: PropTypes.arrayOf(PropTypes.object),
  rightItems: PropTypes.arrayOf(PropTypes.object),
  fixed: PropTypes.bool,
  heading: PropTypes.func,
  showFixedMenu: PropTypes.func,
  hideFixedMenu: PropTypes.func,
  background: PropTypes.shape({
    overlay: PropTypes.string,
    image: PropTypes.string,
    fullHeight: PropTypes.bool,
  }),
  location: PropTypes.any,
};

/* eslint-disable arrow-body-style */
const mapStateToProps = (state) => {
  return {
    leftItems: state.navigation.leftItems,
    rightItems: state.navigation.rightItems,
    fixed: state.navigation.navbar.fixed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFixedMenu: () => {
      dispatch({
        type: 'SHOW_FIXED_MENU',
      });
    },
    hideFixedMenu: () => {
      dispatch({
        type: 'HIDE_FIXED_MENU',
      });
    },
  };
};
/* eslint-enable */

export default connect(mapStateToProps, mapDispatchToProps)(DesktopContainer);
