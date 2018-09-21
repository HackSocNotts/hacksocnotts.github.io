import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { ResponsiveContainer } from '../../Containers';
import { Footer } from '../../Footer';

import * as styles from './Error404Page.less';

export default class Error404Page extends Component {
  headerBackground = {
    overlay: null,
    image: null,
  };

  heading = ({ mobile } = { mobile: false }) => (
    <Container text>
      <Header
        as='h1'
        content='Page or Item Not Found'
        inverted
        className={mobile ? styles.mobileHeader1 : styles.desktopHeader1}
      />
    </Container>
  );

  render = () => {
    const { headerBackground, heading } = this;
    return (
      <ResponsiveContainer heading={heading} background={headerBackground}>
        <Container style={{ height: (window.innerHeight - 200), paddingTop: '1em' }}>
          <Header as='h3' className={styles.h3}>
            Please verify that the URL is correct.
          </Header>
          <p className={styles.p}>
            This error could be caused by an invalid event in the manifest. Feel free to check the GitHub repository.
          </p>
        </Container>
        <Footer />
      </ResponsiveContainer>
    );
  };
}
