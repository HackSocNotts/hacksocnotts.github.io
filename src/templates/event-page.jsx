// import PropTypes from 'prop-types';
// import React from 'react';
// import { graphql } from 'gatsby';
// import { Container as SuiContainer, Header } from 'semantic-ui-react';
// import * as moment from 'moment';
// import Container from '../components/Container';

// import * as styles from '../assets/less/pages/event-page.less';

// const duartionDiff = (start, end) => {
//   if (start.format('YYYY MM DD') !== end.format('YYYY MM DD')) {
//     const duration = moment.duration(end.diff(start));
//     return <sup>+{Math.round(duration.asDays())}</sup>;
//   }
// };

// const EventPage = ({ data }) => {
//   const { frontmatter, html } = data.event;
//   const { name, location, mapLink, noHeaderText, banner, noHeaderAlt } = frontmatter;
//   const start = moment(frontmatter.start);
//   const end = moment(frontmatter.end);

//   const headerBackground = {
//     overlay: noHeaderText ? 'rgba(0,0,0,0)' : 'rgba(0, 0, 0, 0.7)',
//     image: banner,
//     halfHeight: true,
//   };

//   const heading = ({ mobile } = { mobile: false }) => {
//     const headerContent = noHeaderText ? '' : name;

//     return (
//       <SuiContainer text>
//         <Header
//           as="h1"
//           content={headerContent}
//           inverted
//           className={mobile ? styles.mobileHeader1 : styles.desktopHeader1}
//           aria-label={noHeaderAlt}
//         />
//       </SuiContainer>
//     );
//   };

//   heading.propTypes = {
//     mobile: PropTypes.bool,
//   };

//   return (
//     <Container heading={heading} background={headerBackground}>
//       <SuiContainer className={styles.container}>
//         <h1 className={styles.title}>{name}</h1>
//         <p className={styles.date}>{start.format('dddd, MMMM Do YYYY')}</p>
//         <p className={styles.time}>
//           {start.format('h:mm a')}
//           &nbsp;–&nbsp;
//           {end.format('h:mm a')}
//           {duartionDiff(start, end)}
//         </p>
//         <p className={styles.location}>
//           {location}
//           <a className={styles.locationMapLink} href={mapLink} target="_blank" rel="noopener noreferrer">
//             &nbsp;(map)
//           </a>
//         </p>
//         <div className={styles.summary} dangerouslySetInnerHTML={{ __html: html }} />
//       </SuiContainer>
//     </Container>
//   );
// };

// EventPage.propTypes = {
//   data: PropTypes.shape({
//     event: PropTypes.shape({
//       html: PropTypes.string,
//       frontmatter: PropTypes.shape({
//         name: PropTypes.string,
//         start: PropTypes.string,
//         end: PropTypes.string,
//         location: PropTypes.string,
//         mapLink: PropTypes.string,
//         noHeaderText: PropTypes.bool,
//         noHeaderAlt: PropTypes.string,
//         banner: PropTypes.string,
//       }),
//     }),
//   }).isRequired,
// };

// export const pageQuery = graphql`
//   query EventPageQuery($id: String!) {
//     event: markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         id
//         name
//         start
//         end
//         location
//         mapLink
//         noHeaderText
//         noHeaderAlt
//         banner
//       }
//     }
//   }
// `;

// export default EventPage;
