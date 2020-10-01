import React from 'react';
import { Segment, Container, Grid } from 'semantic-ui-react';

import CopyrightLine from './CopyrightLine';

import { segment } from '../assets/less/footer.less';

const Footer = () => (
  <Segment inverted vertical className={segment}>
    <Container>
      <Grid divided inverted stackable>
        <CopyrightLine />
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
