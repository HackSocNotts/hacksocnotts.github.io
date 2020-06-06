import PropTypes from 'prop-types';
import React from 'react';

import { Container, Header } from 'semantic-ui-react';

import * as styles from './EventsPageHeading.less';

const EventsPageHeading = ({ mobile } = { mobile: false }) => (
  <Container text>
    <Header
      as="h1"
      content="HackSoc Nottingham Events"
      inverted
      className={mobile ? styles.mobileHeader1 : styles.desktopHeader1}
    />
  </Container>
);

EventsPageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default EventsPageHeading;
