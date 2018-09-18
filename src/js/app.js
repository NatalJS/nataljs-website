import ScrollNavigation from 'scroll-navigation-menu';

addEventListener('load', () => {
  const offset = -document.querySelector('.header').getBoundingClientRect().height;
  new ScrollNavigation({ offset }).start();
  document.body.style.paddingTop = `${(offset * -1) + 2}px`;
});
