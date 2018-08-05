import React from 'react';

import { ResponsiveContainer } from '../../Containers';
import NewsPageHeading from './NewsPageHeading';
import { Footer } from '../../Footer';

const backgroundProp = {
  overlay: null,
  image: null,
  fullHeight: false,
};

const NewsPage = () => (
  <ResponsiveContainer heading={NewsPageHeading} background={backgroundProp}>
    <Footer />
  </ResponsiveContainer>
);

export default NewsPage;
