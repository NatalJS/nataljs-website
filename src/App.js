import React from 'react';
import CertificateTemplate from './assets/certificate_template.png';
import 'typeface-roboto';
import './App.css';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
    this.state = {
      isCertificateVisible: false,
    };
  }

  generateCertificate(email) {
    this.setState({ isCertificateVisible: true }, () => {
      const context = this.canvas.current.getContext('2d');
      context.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
      const certificate = new window.Image();
      certificate.src = CertificateTemplate;
      certificate.onload = () => {
        context.drawImage(certificate, 0, 0);
        context.textAlign = 'center';
        context.font = 'italic 32px roboto';
        context.fillText(email.toUpperCase(), 877, 690);
        context.font = 'normal 28px roboto';
        context.fillText('Participou do evento Natal JS no IMD UFRN em Natal/RN,', 877, 775);
        context.fillText('com carga horária de 6 horas.', 877, 805);
        context.font = 'normal 21px roboto';
        context.fillText('Natal/RN, 22 de setembro de 2018'.toUpperCase(), 460, 990);
        context.font = 'normal 21px roboto';
        context.fillText('Validação: https://nataljs.github.io/', 877, 1180);
      };
    });
  }

  render() {
    return (
      <div className="app">
        <header>
        </header>
        <div className='certificating-container'>
          <CertificateForm inputId="certificate-email" generateCertificate={this.generateCertificate.bind(this)}/>
          {this.state.isCertificateVisible ? <canvas ref={this.canvas} className="certificate-canvas"  width="1754" height="1241"/> : null }
        </div>
      </div>
    );
  }
}

const CertificateForm = ({ inputId, generateCertificate }) => (
  <form onSubmit={onSubmitCertificateFormFn(generateCertificate)}>
    <h2>Gere seu certificado do último evento!</h2>
    <label htmlFor={inputId}>E-mail</label>
    <input type="email" id={inputId} name="email" required/>
    <button type="submit">Baixar</button>
  </form>
);

const onSubmitCertificateFormFn = generateCertificate => (event) => {
  event.preventDefault();
  const field = event.target['certificate-email'];
  generateCertificate(field.value);
  field.value = '';
};