import React, { Component } from 'react';
import { Container as SuiContainer, Header } from 'semantic-ui-react';
import Container from '../components/Container';

import * as styles from '../assets/less/pages/404-page.less';

export default class Error404Page extends Component {
  constructor(props) {
    super(props);

    this.headerBackground = {
      overlay: null,
      image: null,
    };
  }

  heading({ mobile } = { mobile: false }) {
    return (
      <SuiContainer text>
        <Header
          as="h1"
          content="Page or Item Not Found"
          inverted
          className={mobile ? styles.mobileHeader1 : styles.desktopHeader1}
        />
      </SuiContainer>
    );
  }

  render() {
    const { headerBackground, heading } = this;
    return (
      <Container heading={heading} background={headerBackground}>
        <SuiContainer style={{ height: window.innerHeight - 200, paddingTop: '1em' }}>
          <Header as="h3" className={styles.h3}>
            Please verify that the URL is correct.
          </Header>
          <p className={styles.p}>
            This error could be caused by an invalid event in the manifest. Feel free to check the GitHub repository.
          </p>
        </SuiContainer>
      </Container>
    );
  }
}
