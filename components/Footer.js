import React from 'react';

const Footer = () => (
  <footer id="footer" className="footer">
    <ul className="footer__socials">
      <li>
        <a href="https://www.facebook.com/nataljs/" className="footer__social" title="facebook">
          <img src="/static/images/facebook-logo.svg" className="footer__ico" alt="facebook" />
        </a>
      </li>
      <li>
        <a href="https://github.com/NatalJS" className="footer__social" title="github">
          <img src="/static/images/github-logo.svg" className="footer__ico" alt="github" />
        </a>
      </li>
      <li>
        <a href="https://t.me/natal_js" className="footer__social" title="telegram">
          <img src="/static/images/telegram-logo.svg" className="footer__ico" alt="telegram" />
        </a>
      </li>
    </ul>
    <p className="footer__copy">
      © NatalJS.
    </p>
  </footer>
);

export default Footer;
