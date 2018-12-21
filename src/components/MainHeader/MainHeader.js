import React from 'react';

export default function MainHeader() {
  return (
    <header class="header">
      <div class="header__logo">
        <img class="logo--mobile" src="${require('assets/logo-mobile.svg')}" alt="Natal JS Logo" />
        <img class="logo--desktop" src="${require('assets/logo.svg')}" alt="Natal JS Logo" />
      </div>
      <menu class="header__menu">
        <ul class="menu">
          <li class="menu__item">
            <a href="#about" class="menu__item__link scroll">O que é</a>
          </li>
          <li class="menu__item">
            <a href="#how-to" class="menu__item__link scroll">Por onde começar?</a>
          </li>
          <li class="menu__item">
            <a href="#incoming-events" class="menu__item__link scroll">Próximos eventos</a>
          </li>
          <li class="menu__item">
            <a href="#join-us" class="menu__item__link scroll">Faça parte</a>
          </li>
        </ul>
      </menu>
    </header>
  );
}
