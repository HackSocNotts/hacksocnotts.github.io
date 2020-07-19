import PropTypes from 'prop-types';
import React from 'react';

import { Container, Header, Image } from 'semantic-ui-react';

// import logo from 'resources/logo.png';
const logo = '#';

import * as styles from '../assets/less/headers.less';

const HomePageHeading = ({ mobile } = { mobile: false }) => (
  <Container text>
    <Header
      as="h1"
      content={
        <React.Fragment>
          <Image size="small" src={logo} className={styles.logo} />
          <br />
          HackSoc Nottingham
        </React.Fragment>
      }
      inverted
      className={mobile ? styles.mobileHeader1 : styles.desktopHeader1}
    />
    <Header
      as="h2"
      content="Hacking and Programming society at the University of Nottingham"
      inverted
      className={mobile ? styles.mobileHeader2 : styles.desktopHeader2}
    />
  </Container>
);

HomePageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomePageHeading;
