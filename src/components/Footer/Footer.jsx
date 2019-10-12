import React from 'react';

import { Segment, Container, Grid } from 'semantic-ui-react';

import CopyrightRow from './CopyrightRow';

import * as styles from './Footer.less';

const Footer = () => (
  <Segment
    inverted
    vertical
    className={styles.segment}
  >
    <Container>
      <Grid
        divided
        inverted
        stackable
      >
        <CopyrightRow />
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
