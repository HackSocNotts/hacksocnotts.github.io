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
import AlexanderDewfall from 'resources/team/AlexanderDewfall.jpg';
import ReeceRoberts from 'resources/team/ReeceRoberts.jpg';
import NeveMarpole from 'resources/team/NeveMarpole.jpg';
import SamuelKing from 'resources/team/SamuelKing.jpg';
import TashBayliss from 'resources/team/TashBayliss.jpg';
import JamesFrost from 'resources/team/JamesFrost.jpg';
import PeterTaylor from 'resources/team/PeterTaylor.png';
import MollyShalliker from 'resources/team/MollyShalliker.jpg';
import MeabhMagee from 'resources/team/MeabhMagee.jpg';
import ReeceHarvey from 'resources/team/ReeceHarvey.jpg';
import RyanHardwick from 'resources/team/RyanHardwick.jpg';

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
              HackNotts is a 24 hour hackathon at the University of Nottingham, in
              England. Over 150 students will team up to learn about tech and create cool stuff.
              Learn more about it on the&nbsp;
              <a href='https://hacknotts.com' target='_blank' rel='noopener noreferrer' aria-label='External - HackNotts Website'>
                HackNotts Website.
              </a>
              .
            </p>
          </Grid.Column>
          <Grid.Column className={styles.flagshipGrid} id='hack-quarantine'>
            <Header as='h3' className={styles.h3}>
              Hack Quarantine
            </Header>
            <p className={styles.p}>
              Hack Quarantine is a fully-online, people-focused hackathon bringing people together to use their skills to help combat the issues the world is facing with the COVID-19 pandemic.
              Learn more about it on the&nbsp;
              <a href='https://hackquarantine.com' target='_blank' rel='noopener noreferrer' arial-label='External - Hack Quarantine Website'>
                Hack Quarantine Website
              </a>
              .
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment className={styles.segment3} vertical id='team'>
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
      <Grid stackable centered>
        <Grid.Row>
          <Grid.Column width={2}>
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
          <Grid.Column width={2}>
            <Image src={AlexanderDewfall} size='medium' />
            <p>
              <span className={styles.p}>
                Alexi Dewfall
              </span>
              <br />
              Vice President
              <br />
              <a href='mailto:alexander@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              <a href='https://twitter.com/AcAksan' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a>
              <a href='https://linkedin.com/in/alexander-dewfall-0ab3ba173' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={NeveMarpole} size='medium' />
            <p>
              <span className={styles.p}>
                Neve Marpole
              </span>
              <br />
              Treasurer
              <br />
              <a href='mailto:neve.marpole@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              {/* <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              {/* <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a> */}
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={ReeceRoberts} size='medium' />
            <p>
              <span className={styles.p}>
                Reece Roberts
              </span>
              <br />
              General Secretary
              <br />
              <a href='mailto:reece.roberts@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              {/* <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              {/* <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a> */}
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image src={PeterTaylor} size='medium' />
            <p>
              <span className={styles.p}>
                Peter Taylor
              </span>
              <br />
              Development Secretary
              <br />
              <a href='mailto:peter.taylor@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              {/* <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              {/* <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a> */}
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={TashBayliss} size='medium' />
            <p>
              <span className={styles.p}>
                Tash Bayliss
              </span>
              <br />
              Speaker Acquisition Secretary
              <br />
              <a href='mailto:tash.bayliss@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              {/* <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              {/* <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a> */}
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={SamuelKing} size='medium' />
            <p>
              <span className={styles.p}>
                Samuel King
              </span>
              <br />
              Industrial Partners Secretary
              <br />
              <a href='mailto:samuel@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              <a href='https://twitter.com/King_of_Sams_' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a>
              <a href='https://www.linkedin.com/in/samuel-king-564514184/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={MollyShalliker} size='medium' />
            <p>
              <span className={styles.p}>
                Molly Shalliker
              </span>
              <br />
              Welfare and Inclusivity Secretary
              <br />
              <a href='mailto:molly.shalliker@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              {/* <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              {/* <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a> */}
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image src={RyanHardwick} size='medium' />
            <p>
              <span className={styles.p}>
                Ryan Hardwick
              </span>
              <br />
              Cyber Security Secretary
              <br />
              <a href='mailto:reece.hardwick@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              {/* <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              {/* <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a> */}
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={MeabhMagee} size='medium' />
            <p>
              <span className={styles.p}>
                Méabh Magee
              </span>
              <br />
              Social Media Secretary
              <br />
              <a href='mailto:meabh.magee@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              {/* <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              {/* <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a> */}
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={JamesFrost} size='medium' />
            <p>
              <span className={styles.p}>
                James Frost
              </span>
              <br />
              Marketing Secretary
              <br />
              <a href='mailto:james.frost@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              {/* <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              {/* <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a> */}
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={ReeceHarvey} size='medium' />
            <p>
              <span className={styles.p}>
                Reece Harvey
              </span>
              <br />
              Graphics Officer
              <br />
              <a href='mailto:reece.harvey@hacksocnotts.co.uk' target='_blank' rel='noopener noreferrer'>
                <Icon link name='mail' color='green' />
              </a>
              {/* <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              {/* <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='linkedin' className={styles.linkedIn} />
              </a> */}
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </ResponsiveContainer>
);

export default HomePage;
