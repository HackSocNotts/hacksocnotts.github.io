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

import { COLORS } from 'semantic-ui-react/src/lib/SUI';

import logo from 'resources/logo.png';
import background from 'resources/background.jpg';

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
    } = this.props;
    const backgroundOverlay = 'rgba(0, 0, 0, 0.6)';

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
            style={{
              background: `linear-gradient(${backgroundOverlay}, ${backgroundOverlay}),
                url(${background}) no-repeat`, // Add to Less somehow
              minHeight: window.innerHeight, // Convert to async listener
            }}
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
                <Menu.Item as='a' active>
                  { fixed ? <Image size='mini' src={logo} /> : 'Home'}
                </Menu.Item>
                {_.map(leftItems, item => <Menu.Item {...item} />)}
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
