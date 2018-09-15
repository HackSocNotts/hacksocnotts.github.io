import React from 'react';

import { Segment,
  Grid,
  Header,
  Divider,
  Container,
  Icon,
  Image } from 'semantic-ui-react';

import backgroundImage from 'resources/background.jpg';
import AaronOsher from 'resources/team/AaronOsher.jpg';
import AmmarKhazal from 'resources/team/AmmarKhazal.jpeg';
import HelenaWong from 'resources/team/HelenaWong.png';
import PrimozFabiani from 'resources/team/PrimozFabiani.png';
import TobyJones from 'resources/team/TobyJones.jpg';

import { ResponsiveContainer } from '../../Containers';
import HomePageHeading from './HomePageHeading';
import { Footer } from '../../Footer';

import * as styles from './HomePage.less';

const backgroundProp = {
  overlay: 'rgba(0, 0, 0, 0.6)',
  image: backgroundImage,
  fullHeight: true,
};

const HomePage = () => (
  <ResponsiveContainer heading={HomePageHeading} background={backgroundProp}>
    <Segment className={styles.segment1} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h3' className={styles.h3}>
              About HackSoc Nottingam
            </Header>
            <p className={styles.p}>
            A part of the University of Nottingham Students&apos;​ Union, HackSoc is centered around
            getting its members building, learning, and sharing new tech. Every week we have programming
            tutorials for complete beginners, advanced topics with guest speakers, and throughout the year
            we travel to hackathons to team up with other students from around the world.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' className={styles.h3}>
              Who can join?
            </Header>
            <p className={styles.p}>
              HackSoc is open to all. From newbies to seasoned developers, as long as you&apos;re interested in tech,
              HackSoc is for you.
            </p>
            <Header as='h4' className={styles.h4}>
              Newbies
            </Header>
            <p className={styles.p}>
              Anyone with little or no knowledge of programming; no experience required!
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Header as='h4' className={styles.h4}>
              Designers
            </Header>
            <p className={styles.p}>
              Got an idea that could work with some programming? Come along to share your idea,
              build your idea and get great things made!
            </p>
            <Header as='h4' className={styles.h4}>
              Developers
            </Header>
            <p className={styles.p}>
              Improve your skillset, meet other people like you and travel to Hackathons with friends.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Divider horizontal className={styles.h3}>
      Our Flagship Events
    </Divider>
    <Segment className={styles.segment2} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column className={styles.flagshipGrid}>
            <Header as='h3' className={styles.h3}>
              HackNotts
            </Header>
            <p className={styles.p}>
              HackNotts is a 24 hour hackathon from Nov 24-25 at the University of Nottingham, in
              England. Over 150 students will team up to learn about tech and create cool stuff.
            </p>
          </Grid.Column>
          <Grid.Column className={styles.flagshipGrid}>
            <Header as='h3' className={styles.h3}>
              inspireWiT
            </Header>
            <p className={styles.p}>
              inspireWiT Conference is a technology-focused day for women and people of all
              gender minorities—inspiring everyone!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment className={styles.segment3} vertical>
      <Container text>
        <Header as='h3' className={styles.h3}>
          Our Team
        </Header>
        <p className={styles.p}>
          HackSoc is run by a committed and motivated team of students striving to give our
          members the best experiences possible.
        </p>
      </Container>
      <Divider hidden />
      <Grid container stackable centered>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={AaronOsher} size='medium' />
            <p>
              <span className={styles.p}>
                Aaron Osher
              </span>
              <br />
              President
              <br />
              <a href='mailto:aaron@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              <a href='https://twitter.com/aaronosher' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a>
              <a href='https://linkedin.com/in/aaronosher' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src={PrimozFabiani} size='medium' />
            <p>
              <span className={styles.p}>
                Primoz Fabiani
              </span>
              <br />
              General Secretary
              <br />
              <a href='mailto:primoz@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              {/* <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              {/* <a href='https://linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a> */}
            </p>
          </Grid.Column>
          {/* <Grid.Column width={3}>
            <Image src={HelenaWong} size='medium' />
            <p>
              <span className={styles.p}>
                Helena Maria Wong
              </span>
              <br />
              Treasurer
              <br />
              {/* <a href='mailto:@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a>
              <a href='https://linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column> */}
          <Grid.Column width={3}>
            <Image src={TobyJones} size='medium' />
            <p>
              <span className={styles.p}>
                Toby Jones
              </span>
              <br />
              Hack Secretary
              <br />
              <a href='mailto:toby@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              <a href='https://twitter.com/monotron_' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a>
              <a href='https://linkedin.com/in/toby-jones-a82165151' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src={AmmarKhazal} size='medium' />
            <p>
              <span className={styles.p}>
                Ammar Khazal
              </span>
              <br />
              Outreach and Inclusivity Secretary
              <br />
              <a href='mailto:ammar@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              {/* <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              <a href='https://www.linkedin.com/in/ammarkhazal/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </ResponsiveContainer>
);

export default HomePage;
