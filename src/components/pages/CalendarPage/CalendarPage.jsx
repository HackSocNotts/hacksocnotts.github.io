import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isMoment } from 'core/propTypes';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import { Container, Popup } from 'semantic-ui-react';
import { compiler } from 'markdown-to-jsx';

import CalendarPageHeading from './CalendarPageHeading';
import { ResponsiveContainer } from '../../Containers';
import Footer from '../../Footer/Footer';

import './styles.css';
import * as styles from './CalendarPage.less';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class CalendarPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };

    this.backgroundProp = {
      overlay: null,
      image: null,
      fullHeight: false,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const { events } = nextProps;
    const newEvents = events.map((event) => ({
      ...event,
      title: event.name,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
    return { events: newEvents };
  }

  event({ event }) {
    return (
      <React.Fragment>
        <Popup
          key={event.id}
          trigger={<strong>{event.title}</strong>}
          header={event.title}
          content={event.summary ? compiler(event.summary) : ''}
        />
      </React.Fragment>
    );
  }

  render() {
    const { events } = this.state;
    const { router } = this.context;

    return (
      <ResponsiveContainer heading={CalendarPageHeading} background={this.backgroundProp}>
        <Container style={{ height: window.innerHeight - 200 }} className={styles.calendarContainer}>
          <BigCalendar
            events={events}
            defaultView={BigCalendar.Views.MONTH}
            onSelectEvent={(event) => router.history.push(`/event/${event.id}`)}
            views={['month']}
            components={{
              event: this.event,
            }}
          />
        </Container>
        <Footer />
      </ResponsiveContainer>
    );
  }
}

CalendarPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

CalendarPage.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      start: isMoment,
      end: isMoment,
      location: PropTypes.string,
      summary: PropTypes.string,
      description: PropTypes.string,
      banner: PropTypes.any,
    }),
  ),
};

/* eslint-disable arrow-body-style */
const mapStateToProps = (state) => ({
  events: state.events.items,
});

const mapDispatchToProps = () => ({});
/* eslint-enable */

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
