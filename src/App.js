import React from 'react';
import CertificateForm from './components/CertificateForm/CertificateForm';

import './App.css';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <header>
        </header>
        <CertificateForm/>
      </div>
    );
  }
}
