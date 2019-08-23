import React from 'react';

const CallForPapers = ({ link }) => (
  <section id="call-for-papers" className="call-for-papers">
    <h1 className="section-title">Call For Papers</h1>
    <p>Tem uma palestra legal? Tem algo para falar?</p>
    <a href={link} className="btn btn--black" targe="_blank">
      Submeta sua palestra
    </a>
  </section>
);

export default CallForPapers;
