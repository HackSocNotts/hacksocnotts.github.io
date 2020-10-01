import React from 'react';
import Column from './Column';
import Container from './Container';
import Row from './Row';

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row className="gtr-200">
          <Column large={6} xsmall={12}>
            <h3>News</h3>
            <ul className="updates">
              <li>Something</li>
            </ul>
          </Column>
          <Column large={6} xsmall={12}>
            <h3>Contact</h3>
            <Row>
              <Column large={6} medium={12}>
                <ul className="labeled-icons">
                  <li>
                    <h4>Twitter</h4>
                    <a href="https://twitter.com/hacksocnotts" target="_blank" rel="noopener noreferrer">
                      @hacksocnotts
                    </a>
                  </li>
                  <li>
                    <h4>Facebook</h4>
                    <a href="https://facebook.com/hacksocnotts" target="_blank" rel="noopener noreferrer">
                      hacksocnotts
                    </a>
                  </li>
                  <li>
                    <h4>GitHub</h4>
                    <a href="https://github.com/hacksocnotts" target="_blank" rel="noopener noreferrer">
                      hacksocnotts
                    </a>
                  </li>
                </ul>
              </Column>
              <Column large={6} medium={12}>
                <ul className="labeled-icons">
                  <li>
                    <h4>Email</h4>
                    <a href="mailto:info@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                      info@hacksocnotts.co.uk
                    </a>
                  </li>
                  <li>
                    <h4>Instagram</h4>
                    <a href="https://instagram.com/hacksocnotts" target="_blank" rel="noopener noreferrer">
                      @hacksocnotts
                    </a>
                  </li>
                </ul>
              </Column>
            </Row>
          </Column>
        </Row>
        <ul className="copyright">
          <li>&copy; HackSoc Nottingham. All Rights Reserved.</li>
          <li>
            <a href="https://hacksoc.net/join" target="_blank" rel="noopener noreferrer">
              Join
            </a>
          </li>
          <li>
            <a href="https://hacksoc.net/code-of-conduct" target="_blank" rel="noopener noreferrer">
              Code of Conduct
            </a>
          </li>
          <li>
            <a href="mailto:info@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>
            HackSoc Nottingham is a{' '}
            <a href="https://www.su.nottingham.ac.uk/" target="_blank" rel="noopener noreferrer">
              University of Nottingham Students' Union
            </a>{' '}
            student society.
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Footer;
