import React from 'react';

import { ResponsiveContainer } from '../../Containers';
import EventsPageHeading from './EventsPageHeading';
import { Footer } from '../../Footer';

const backgroundProp = {
  overlay: null,
  image: null,
  fullHeight: false,
};

const EventsPage = () => (
  <ResponsiveContainer heading={EventsPageHeading} background={backgroundProp}>
    <Footer />
  </ResponsiveContainer>
);

export default EventsPage;