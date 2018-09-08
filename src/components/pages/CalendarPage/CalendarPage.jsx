import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isMoment } from 'core/propTypes';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'semantic-ui-react';

import CalendarPageHeading from './CalendarPageHeading';
import { ResponsiveContainer } from '../../Containers';
import Footer from '../../Footer/Footer';

import * as styles from './CalendarPage.less';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class CalendarPage extends Component {
  state = { events: [] };

  backgroundProp = {
    overlay: null,
    image: null,
    fullHeight: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { events } = nextProps;
    console.log(events);
    const newEvents = events.map(event => ({
      ...event,
      title: event.name,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
    console.log(newEvents);
    return { events: newEvents };
  }

  render() {
    const { events } = this.state;
    return (
      <ResponsiveContainer heading={CalendarPageHeading} background={this.backgroundProp}>
        <Container style={{ height: (window.innerHeight - 200) }} className={styles.calendarContainer}>
          <BigCalendar
            events={events}
            defaultView={BigCalendar.Views.MONTH}
            // onSelectEvent={event => alert(event.title)}
          />
        </Container>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

CalendarPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    start: isMoment,
    end: isMoment,
    location: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    banner: PropTypes.any,
  })),
};

/* eslint-disable arrow-body-style */
const mapStateToProps = state => ({
  events: state.events.items,
});

const mapDispatchToProps = () => ({});
/* eslint-enable */

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
