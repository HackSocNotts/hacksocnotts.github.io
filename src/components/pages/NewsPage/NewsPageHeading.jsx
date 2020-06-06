import PropTypes from 'prop-types';
import React from 'react';

import { Container, Header } from 'semantic-ui-react';

import * as styles from './NewsPageHeading.less';

const NewsPageHeading = ({ mobile } = { mobile: false }) => (
  <Container text>
    <Header
      as="h1"
      content="HackSoc Nottingham News"
      inverted
      className={mobile ? styles.mobileHeader1 : styles.desktopHeader1}
    />
  </Container>
);

NewsPageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default NewsPageHeading;
