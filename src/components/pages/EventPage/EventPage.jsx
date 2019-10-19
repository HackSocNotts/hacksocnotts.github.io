import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import * as moment from 'moment';
import { isMoment } from 'core/propTypes';
import { events } from 'store/actions';
import { ResponsiveContainer } from '../../Containers';
import { Footer } from '../../Footer';

import * as styles from './EventPage.less';

class EventPage extends Component {
  duartionDiff() {
    const { activeEvent } = this.props;

    if (
      activeEvent.start.format("YYYY MM DD") !==
      activeEvent.end.format("YYYY MM DD")
    ) {
      const duration = moment.duration(activeEvent.end.diff(activeEvent.start));
      return <sup>+{Math.round(duration.asDays())}</sup>;
    }
  }

  /* eslint-disable camelcase */
  UNSAFE_componentWillReceiveProps(nextProps) {
    /* eslint-disable react/destructuring-assignment */
    const { router } = this.context;
    const eventId = nextProps.match.params.id;
    if (
      nextProps.events.length &&
      nextProps.events.filter(event => event.id === eventId).length < 1
    ) {
      router.history.push("/page-not-found");
    }
    /* eslint-enable */
  }

  componentDidMount() {
    const { match, activateEvent } = this.props;
    activateEvent(match.params.id);
  }

  render() {
    const { activeEvent } = this.props;

    const headerBackground = {
      overlay: 'rgba(0, 0, 0, 0.7)',
      image: activeEvent ? activeEvent.banner : null,
      halfHeight: true
    };

    const heading = ({ mobile } = { mobile: false }) => (
      <Container text>
        <Header
          as='h1'
          content={activeEvent ? activeEvent.name : "Loading..."}
          inverted
          className={mobile ? styles.mobileHeader1 : styles.desktopHeader1}
        />
      </Container>
    );

    return (
      <ResponsiveContainer heading={heading} background={headerBackground}>
        <Container className={styles.container}>
          <h1 className={styles.title}>{activeEvent.name}</h1>
          <p className={styles.date}>
            {activeEvent.start.format('dddd, MMMM Do YYYY')}
          </p>
          <p className={styles.time}>
            {activeEvent.start.format('h:mm a')}
            &nbsp;–&nbsp;
            {activeEvent.end.format('h:mm a')}
            {this.duartionDiff()}
          </p>
          <p className={styles.location}>
            {activeEvent.location}
            <a
              className={styles.locationMapLink}
              href={activeEvent.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;(map)
            </a>
          </p>
          <Markdown className={styles.summary}>
            {activeEvent.description}
          </Markdown>
        </Container>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

EventPage.contextTypes = {
  router: PropTypes.object.isRequired
};

EventPage.propTypes = {
  match: PropTypes.any.isRequired,
  activateEvent: PropTypes.func.isRequired,
  activeEvent: PropTypes.shape({
    name: PropTypes.string,
    start: isMoment,
    end: isMoment,
    location: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    banner: PropTypes.string,
    bgColor: PropTypes.string
  }).isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      start: isMoment,
      end: isMoment,
      location: PropTypes.string,
      summary: PropTypes.string,
      description: PropTypes.string,
      banner: PropTypes.string,
      bgColor: PropTypes.string
    })
  ).isRequired
};

/* eslint-disable arrow-body-style */
const mapStateToProps = state => {
  return {
    activeEvent: state.events.activeEvent,
    events: state.events.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    activateEvent: id => dispatch(events.activateEvent(id))
  };
};
/* eslint-enable */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventPage);
