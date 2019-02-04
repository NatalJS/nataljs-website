import React from 'react';

const JoinToUs = () => (
  <section id="join-us" className="join-us">
    <h1 className="section-title">Faça Parte</h1>
    <ul className="join-us__list">
      <li className="join-us__item">Vá aos encontros!</li>
      <li className="join-us__item">Use a hasttag #nataljs</li>
      <li className="join-us__item">Divulgue nas redes socias</li>
      <li className="join-us__item">
        Contribua em
        {' '}
        <a className="join-us__link" href="https://github.com/NatalJS" title="NatalJS" target="_blank" rel="noopener noreferrer">
          nossos projetos
        </a>
      </li>
    </ul>
  </section>
);

export default JoinToUs;
