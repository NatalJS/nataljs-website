import React from 'react';
import './App.css';

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <header>
        </header>
        <div>
          <CertificateForm inputId="certificate-email" onSubmit={onSubmitCertificateForm}/>
        </div>
      </div>
    );
  }
}

const CertificateForm = ({ inputId, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <h2>Gere seu certificado do último evento!</h2>
    <label htmlFor={inputId}>E-mail</label>
    <input type="email" id={inputId} name="email" required/>
    <button type="submit">Baixar</button>
  </form>
);

const onSubmitCertificateForm = (event) => {
  event.preventDefault();
  const field = event.target['certificate-email'];
  downloadCertificate(field.value);
  field.value = '';
};

const downloadCertificate = (email) => {
  alert(email);
};
