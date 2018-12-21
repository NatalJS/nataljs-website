import React from 'react';
import CertificateForm from './components/CertificateForm/CertificateForm';
import MainHeader from './components/MainHeader/MainHeader';

import './App.css';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <MainHeader/>
        {null && <CertificateForm/>}
      </div>
    );
  }
}
