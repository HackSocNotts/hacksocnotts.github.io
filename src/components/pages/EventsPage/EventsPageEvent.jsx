import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { isMoment } from 'core/propTypes';

import * as styles from './EventsPageEvent.less';

export default class EventsPageEvent extends Component {
  makeDateHeading() {
    const { event } = this.props;

    let dateHeadline;

    if (event.start.format('YYYY MM DD') === event.end.format('YYYY MM DD')) {
      dateHeadline = (
        <span>
          <h2>
            {event.start.format('dddd, MMMM Do YYYY')}
          </h2>
          <h3>
            {event.start.format('H:mm')}
            &nbsp;–&nbsp;
            {event.end.format('H:mm')}
          </h3>
        </span>
      );
    } else {
      dateHeadline = (
        <span>
          <h3>
            From:&nbsp;
            {event.start.format('dddd, MMMM Do YYYY, H:mm')}
          </h3>
          <h3>
            To:&nbsp;
            {event.end.format('dddd, MMMM Do YYYY, H:mm')}
          </h3>
        </span>
      );
    }

    return dateHeadline;
  }

  render() {
    const { event } = this.props;

    return (
      <Container className={styles.container}>
        <h1>
          {event.name}
        </h1>
        {this.makeDateHeading()}
        <h4>
          {event.location}
        </h4>
        {event.summary}
      </Container>
    );
  }
}

EventsPageEvent.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    start: isMoment,
    end: isMoment,
    location: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
  }),
};
