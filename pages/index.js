import React from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import About from 'components/About';
import HowTo from 'components/HowTo';
import Events from 'components/Events';
import JoinToUs from 'components/JoinToUs';
import Footer from 'components/Footer';

import 'styles/style.scss'

const Index = () => (
  <div>
    <Head>
      <title>Natal.js - Comunidade para discutir javascript</title>
    </Head>
    <Header />
    <div className="container">
      <About />
      <HowTo />
    </div>
    <Events />
    <JoinToUs />
    <Footer />
  </div>
);

export default Index;
