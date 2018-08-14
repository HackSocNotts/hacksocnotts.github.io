import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import { isMoment } from 'core/propTypes';
import { events } from 'store/actions';
import { ResponsiveContainer } from '../../Containers';

import * as styles from './EventPage.less';

class EventPage extends Component {
  componentDidMount() {
    const { match, activateEvent } = this.props;
    activateEvent(match.params.id);
  }

  render() {
    const { match, activeEvent } = this.props;

    const headerBackground = {
      overlay: 'rgba(0, 0, 0, 0.7)',
      image: activeEvent ? activeEvent.banner : null,
      halfHeight: true,
    };

    const heading = ({ mobile } = { mobile: false }) => (
      <Container text>
        <Header
          as='h1'
          content={activeEvent ? activeEvent.name : 'Loading...'}
          inverted
          className={mobile ? styles.mobileHeader1 : styles.desktopHeader1}
        />
      </Container>
    );

    return (
      <ResponsiveContainer heading={heading} background={headerBackground}>
        {match.params.id}
      </ResponsiveContainer>
    );
  }
}

EventPage.propTypes = {
  match: PropTypes.any,
  activateEvent: PropTypes.func,
  activeEvent: PropTypes.shape({
    name: PropTypes.string,
    start: isMoment,
    end: isMoment,
    location: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    banner: PropTypes.string,
  }),
};

/* eslint-disable arrow-body-style */
const mapStateToProps = (state) => {
  return {
    activeEvent: state.events.activeEvent,
    events: state.events.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activateEvent: id => dispatch(events.activateEvent(id)),
  };
};
/* eslint-enable */

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);