import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import EventsPageHeading from '../components/EventsPageHeading';
import EventsPageEvent from '../components/EventItem';
import Container from '../components/Container';

import * as styles from '../assets/less/pages/events-page.less';

const EventsPage = ({ data }) => {
  const { events } = data.allMarkdownRemark;
  const { src: backgroundImage } = data.backgroundImage.childImageSharp.original;

  const backgroundProp = {
    overlay: 'rgba(0, 0, 0, 0.7)',
    image: backgroundImage,
    halfHeight: true,
  };

  return (
    <Container heading={EventsPageHeading} background={backgroundProp}>
      <div className={styles.eventsContainer}>
        {events.map(({ id, frontmatter }) => (
          <EventsPageEvent event={frontmatter} key={id} />
        ))}
      </div>
    </Container>
  );
};

EventsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      events: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          frontmatter: PropTypes.shape({
            id: PropTypes.string,
            start: PropTypes.string,
            end: PropTypes.string,
            summary: PropTypes.string,
            location: PropTypes.string,
            name: PropTypes.string,
            mapLink: PropTypes.string,
          }),
        }),
      ),
    }),
    backgroundImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        original: PropTypes.shape({
          src: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query EventsPageQuery {
    allMarkdownRemark(
      filter: { isFuture: { eq: true }, fields: { sourceName: { eq: "events" } } }
      sort: { fields: [frontmatter___start], order: ASC }
    ) {
      events: nodes {
        id
        frontmatter {
          id
          start
          end
          summary
          location
          name
          mapLink
        }
      }
    }
    backgroundImage: file(relativePath: { eq: "events.jpg" }) {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
`;

export default EventsPage;
