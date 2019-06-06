import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <img className="logo--mobile" src="/static/images/logo-mobile.svg" alt="NatalJS Logo" />
      <img className="logo--desktop" src="/static/images/logo.svg" alt="NatalJS Logo" />
    </div>
    <menu className="header__menu">
      <ul className="menu">
        <li className="menu__item">
          <a href="#about" className="menu__item__link scroll">O que é</a>
        </li>
        <li className="menu__item">
          <a href="#how-to" className="menu__item__link scroll">Por onde começar?</a>
        </li>
        <li className="menu__item">
          <a href="#sign-up" className="menu__item__link scroll">Inscreva-se</a>
        </li>
        <li className="menu__item">
          <a href="#call-for-papers" className="menu__item__link scroll">Call for papers</a>
        </li>
        <li className="menu__item">
          <a href="#incoming-events" className="menu__item__link scroll">Próximos eventos</a>
        </li>
        <li className="menu__item">
          <a href="#join-us" className="menu__item__link scroll">Faça parte</a>
        </li>
      </ul>
    </menu>
  </header>
);

export default Header;
