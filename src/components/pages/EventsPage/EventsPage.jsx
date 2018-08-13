import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as styles from './EventsPage.less';

import { ResponsiveContainer } from '../../Containers';
import EventsPageHeading from './EventsPageHeading';
import { Footer } from '../../Footer';
import EventsPageEvent from './EventsPageEvent';

class EventsPage extends Component {
  backgroundProp = {
    overlay: null,
    image: null,
    fullHeight: false,
  };

  makeEvents() {
    const { events } = this.props;

    const eventsToReturn = [];

    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      eventsToReturn.push(<EventsPageEvent event={event} key={i} />);
    }

    return eventsToReturn;
  }

  render() {
    return (
      <ResponsiveContainer heading={EventsPageHeading} background={this.backgroundProp}>
        <div className={styles.eventsContainer}>
          {this.makeEvents()}
        </div>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

EventsPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    location: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
  })),
};

/* eslint-disable arrow-body-style */
const mapStateToProps = state => ({
  events: state.events.items,
});

const mapDispatchToProps = () => ({});
/* eslint-enable */

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
