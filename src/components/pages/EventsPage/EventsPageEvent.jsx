import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { Container } from 'semantic-ui-react';
import * as moment from 'moment';
import { isMoment } from 'core/propTypes';

import * as styles from './EventsPageEvent.less';

export default class EventsPageEvent extends Component {
  duartionDiff() {
    const { event } = this.props;

    if (event.start.format('YYYY MM DD') !== event.end.format('YYYY MM DD')) {
      const duration = moment.duration(event.end.diff(event.start));
      return <sup>+{Math.round(duration.asDays())}</sup>;
    }
  }

  render() {
    const { event } = this.props;

    return (
      <Container className={styles.container}>
        <h1 className={styles.title}>{event.name}</h1>
        <p className={styles.date}>{event.start.format('dddd, MMMM Do YYYY')}</p>
        <p className={styles.time}>
          {event.start.format('h:mm a')}
          &nbsp;–&nbsp;
          {event.end.format('h:mm a')}
          {this.duartionDiff()}
        </p>
        <p className={styles.location}>
          {event.location}
          <a className={styles.locationMapLink} href={event.mapLink} target="_blank" rel="noopener noreferrer">
            &nbsp;(map)
          </a>
        </p>
        <Markdown className={styles.summary}>{event.summary.trim()}</Markdown>
        <Link to={`/event/${event.id}`} className={styles.link}>
          <p>
            <br />
            View Event
          </p>
        </Link>
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
    mapLink: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    banner: PropTypes.any,
    id: PropTypes.string,
  }),
};
