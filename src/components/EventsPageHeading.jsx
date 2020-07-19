import PropTypes from 'prop-types';
import React from 'react';

import { Container, Header } from 'semantic-ui-react';

import { mobileHeader1, desktopHeader3 } from '../assets/less/headers.less';

const EventsPageHeading = ({ mobile } = { mobile: false }) => (
  <Container text>
    <Header as="h1" content="HackSoc Nottingham Events" inverted className={mobile ? mobileHeader1 : desktopHeader3} />
  </Container>
);

EventsPageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default EventsPageHeading;
