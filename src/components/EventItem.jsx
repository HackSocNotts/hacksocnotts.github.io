import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Markdown from 'markdown-to-jsx';
import { Container } from 'semantic-ui-react';
import moment from 'moment';

import * as styles from '../assets/less/components/event-item.less';

const duartionDiff = (start, end) => {
  if (start.format('YYYY MM DD') !== end.format('YYYY MM DD')) {
    const duration = moment.duration(end.diff(start));
    return <sup>+{Math.round(duration.asDays())}</sup>;
  }
};

const EventItem = ({ event }) => {
  const { id, summary, location, name, mapLink } = event;
  const start = moment(event.start);
  const end = moment(event.end);

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.date}>{start.format('dddd, MMMM Do YYYY')}</p>
      <p className={styles.time}>
        {start.format('h:mm a')}
        &nbsp;–&nbsp;
        {end.format('h:mm a')}
        {duartionDiff(start, end)}
      </p>
      <p className={styles.location}>
        {location}
        <a className={styles.locationMapLink} href={mapLink} target="_blank" rel="noopener noreferrer">
          &nbsp;(map)
        </a>
      </p>
      <Markdown className={styles.summary}>{summary.trim()}</Markdown>
      <Link to={`/event/${id}`} className={styles.link}>
        <p>
          <br />
          View Event
        </p>
      </Link>
    </Container>
  );
};

EventItem.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    summary: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    mapLink: PropTypes.string,
  }),
};

export default EventItem;
