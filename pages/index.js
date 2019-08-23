import React, { Fragment } from 'react';
import Head from 'next/head';
import last from 'lodash.last';
import get from 'lodash.get';
import Header from 'components/Header';
import About from 'components/About';
import HowTo from 'components/HowTo';
import Events from 'components/Events';
import JoinToUs from 'components/JoinToUs';
import CallForPapers from 'components/CallForPapers';
import Footer from 'components/Footer';
import data from '../content/data.json';

import 'styles/style.scss';

class Index extends React.Component {
  static getInitialProps() {
    const { events } = data;

    return { events };
  }

  componentDidMount() {
    import('plugins/scholl-navigation');
  }

  render() {
    const { events } = this.props;
    const lastEvent = last(events);

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
        {get(lastEvent, 'call4papers.open', false) && (
          <CallForPapers {...lastEvent.call4papers} />
        )}
        <Events events={events} />
        <JoinToUs />
        <Footer />
      </Fragment>
    );
  }
}

export default Index;
