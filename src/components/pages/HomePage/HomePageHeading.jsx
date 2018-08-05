import PropTypes from 'prop-types';
import React from 'react';

import { Container, Header } from 'semantic-ui-react';

import * as styles from './HomePageHeading.less';

const HomePageHeading = ({ mobile } = { mobile: false }) => (
  <Container text>
    <Header
      as='h1'
      content='HackSoc Nottingham'
      inverted
      className={mobile ? styles.mobileHeader1 : styles.desktopHeader1}
    />
    <Header
      as='h2'
      content='Hacking and Programming society at the University of Nottingham'
      inverted
      className={mobile ? styles.mobileHeader2 : styles.desktopHeader2}
    />
  </Container>
);

HomePageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomePageHeading;
