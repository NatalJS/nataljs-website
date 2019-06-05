import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import About from 'components/About';
import HowTo from 'components/HowTo';
import Events from 'components/Events';
import EventsCurrent from 'components/EventsCurrent';
import JoinToUs from 'components/JoinToUs';
import CallForPapers from 'components/CallForPapers';
import Footer from 'components/Footer';

import 'styles/style.scss';

class Index extends React.Component {
  componentDidMount() {
    import('plugins/scholl-navigation');
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Natal.js - Comunidade para discutir javascript</title>
        </Head>
        <Header />
        <div className="container">
          <About />
          <HowTo />
        </div>
        <EventsCurrent />
        <CallForPapers />
        {/* <Events /> */}
        <JoinToUs />
        <Footer />
      </Fragment>
    );
  }
}

export default Index;
