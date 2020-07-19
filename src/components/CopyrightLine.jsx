import React from 'react';

import { Grid } from 'semantic-ui-react';

const CopyrightLine = () => (
  <Grid.Row>
    <Grid.Column width={6} floated="left">
      Copyright &copy;&nbsp;
      {new Date().getFullYear()}
      &nbsp;HackSoc Nottingham. All Rights Reserved.
    </Grid.Column>
    <Grid.Column width={10} floated="right" textAlign="right">
      HackSoc Nottingham is a&nbsp;
      <a href="https://www.su.nottingham.ac.uk/" target="_blank" rel="noopener noreferrer">
        University of Nottingham Students&apos; Union
      </a>
      &nbsp; student run society.
    </Grid.Column>
  </Grid.Row>
);

export default CopyrightLine;
