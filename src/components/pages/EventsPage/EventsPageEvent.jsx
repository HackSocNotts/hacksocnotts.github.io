import PropTypes from 'prop-types';
import React from 'react';

import { Container } from 'semantic-ui-react';

const EventsPageEvent = ({ event }) => (
  <Container>
    {event.name}
  </Container>
);

EventsPageEvent.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    location: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default EventsPageEvent;
