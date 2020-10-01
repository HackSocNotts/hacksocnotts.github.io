import React from 'react';
import Banner from '../components/Banner';
import Column from '../components/Column';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/header';
import Row from '../components/Row';
import cx from 'classnames';

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner cta1={{ to: 'https://hacksoc.net/join', content: 'join' }}>
        <h2>HackSoc Nottingham</h2>
        <p>Hacking and Programming society at the University of Nottingham</p>
      </Banner>
      <section id="one" className="wrapper style1">
        <Container>
          <Row>
            <Column large={4} medium={12}>
              <h3>Something</h3>
              <p>
                Vivamus nec odio tempor etiam aliquam tincidunt. Aliquam lorem et cursus dolore consequat et feugiat
                nulla tempus.
              </p>
            </Column>
            <Column large={4} medium={12}>
              <h3>Something</h3>
              <p>
                Vivamus nec odio tempor etiam aliquam tincidunt. Aliquam lorem et cursus dolore consequat et feugiat
                nulla tempus.
              </p>
            </Column>
            <Column large={4} medium={12}>
              <h3>Something</h3>
              <p>
                Vivamus nec odio tempor etiam aliquam tincidunt. Aliquam lorem et cursus dolore consequat et feugiat
                nulla tempus.
              </p>
            </Column>
          </Row>
        </Container>
      </section>
      <section id="two" className="wrapper style2">
        <Container>
          <section className={cx('spotlight', 'left')}>
            <Row className={cx('gtr-200', 'aln-middle')}>
              <Column large={4} medium={12}>
                <span className={cx('image', 'fit')}>
                  <img src="" />
                </span>
              </Column>
              <Column large={8} medium={12}>
                <h2>Etiam lorem sed tempus magna adipiscing</h2>
                <p>
                  Phasellus tortor magna, convallis sed felis ut, tempor volutpat lorem ipsum quam. Phasellus porta
                  lacinia commodo. Vestibulum enim nibh adipiscing rhoncus at tincidunt ac, feugiat ac dolor. Sed nec
                  odio porta magna feugiat quam posuere feugiat. Nullam porttitor sodales. Tempor volutpat lorem ipsum
                  quam. Phasellus porta lacinia commodo. Vestibulum enim nibh adipiscing rhoncus at tincidunt.
                </p>
              </Column>
            </Row>
          </section>
          <section className={cx('spotlight', 'right')}>
            <Row className={cx('gtr-200', 'aln-middle')}>
              <Column large={4} medium={12}>
                <Column large={8} medium={12}>
                  <h2>Etiam lorem sed tempus magna adipiscing</h2>
                  <p>
                    Phasellus tortor magna, convallis sed felis ut, tempor volutpat lorem ipsum quam. Phasellus porta
                    lacinia commodo. Vestibulum enim nibh adipiscing rhoncus at tincidunt ac, feugiat ac dolor. Sed nec
                    odio porta magna feugiat quam posuere feugiat. Nullam porttitor sodales. Tempor volutpat lorem ipsum
                    quam. Phasellus porta lacinia commodo. Vestibulum enim nibh adipiscing rhoncus at tincidunt.
                  </p>
                </Column>
                <span className={cx('image', 'fit')}>
                  <img src="" />
                </span>
              </Column>
            </Row>
          </section>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
