import React from 'react';

const About = () => (
  <section id="about" className="section about">
    <div className="decorative-square" aria-hidden="true" />
    <div className="decorative-circle" aria-hidden="true" />
    <figure className="col-6 col-sm-12 col-md-4 col-lg-3">
      <img className="logo" src="/static/images/logo-colorful.svg" alt="natalJS logo" />
    </figure>
    <div className="col-12 col-sm-12 col-md-8 col-lg-6">
      <h1 className="section-title--alternate">
        O que é a natal JS?
      </h1>
      <article className="article">
        <header>
          <h1 className="article__title">
            Comunidade para discutir javascript em Natal-RN
          </h1>
        </header>
        <p className="article__body">
          Os objetivos são: ajudar os programadores a obter um melhor conhecimento de programação em
          javascript; aproximar programadores locais; organizar encontros, conferências e contribuir
          com projetos open-source relacionados aos estudos.
        </p>
        <footer>
          <a href="https://github.com/NatalJS" className="btn" title="https://github.com/NatalJS">Acesse nosso Github</a>
        </footer>
      </article>
      <div className="about__wave" aria-hidden="true" />
    </div>
  </section>
);

export default About;
