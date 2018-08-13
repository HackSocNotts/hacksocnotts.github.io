import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isMoment } from 'core/propTypes';

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

  render() {
    const { events } = this.props;

    return (
      <ResponsiveContainer heading={EventsPageHeading} background={this.backgroundProp}>
        <div className={styles.eventsContainer}>
          {_.map(events, event => <EventsPageEvent event={event} key={event.id} />)}
        </div>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

EventsPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    start: isMoment,
    end: isMoment,
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
