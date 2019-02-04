import React from 'react';

const Events = () => (
  <section id="incoming-events" className="events">
    <h1 className="section-title">Próximos Eventos?</h1>
    <div className="events__container">
      <div className="events__block">
        <div className="col-3 events__time">
          <span>22.09</span>
          <span>8H ÀS 12</span>
        </div>
        <div className="col-9 events__body">
          <div className="events__title">O estado atual do front-end no mercado de trabalho</div>
          <div className="events__location">IMD UFRN</div>
        </div>
      </div>

      <div className="events__block">
        <div className="events__day">
          KEYNOTES
          {' '}<span>8H30 ÀS 9H30</span>
        </div>

        <div className="events__speakers">
          <div className="media event__media event__media--sticker1">
            <img className="event__image" src="/static/images/speakers/avatar-jaon.png" alt="jaon" />
            <div className="media-body">
              <h4 className="event__talk">Javascript para Dinossauros</h4>
              <p className="event__speaker">Jaon <span>Front-End na Evolux</span></p>
            </div>
          </div>
          <div className="media event__media event__media--sticker2">
            <img className="event__image" src="/static/images/speakers/avatar-neto.png" alt="neto" />
            <div className="media-body">
              <h4 className="event__talk">Hyped JS: o que os devs descolados estão usando</h4>
              <p className="event__speaker">Neto Guimarães <span>Front-End na Evolux</span></p>
            </div>
          </div>
          <div className="media event__media event__media--sticker3">
            <img className="event__image" src="/static/images/speakers/avatar-marcell.png" alt="marcell" />
            <div className="media-body">
              <h4 className="event__talk">Conhecendo a Comunidade open source</h4>
              <p className="event__speaker">Marcell Guilherme <span>Front-End na Evolux</span></p>
            </div>
          </div>
        </div>

        <div className="events__day">
          WORKSHOPS
          {' '}<span>10H ÀS 12H</span>
        </div>

        <div className="events__speakers">
          <div className="media event__media event__media--sticker1">
            <img className="event__image" src="/static/images/speakers/avatar-jhonny.png" alt="jhonny" />
            <div className="media-body">
              <h4 className="event__talk">Hello World: criando e configuando seu primeiro projeto web</h4>
              <p className="event__speaker">Jhonny Michel <span>Front-End na Evolux</span></p>
            </div>
          </div>
          <div className="media event__media event__media--sticker2">
            <img className="event__image" src="/static/images/speakers/avatar-gustavo.png" alt="gustavo" />
            <div className="media-body">
              <h4 className="event__talk">Procura de heróis na Marvel com Javascript</h4>
              <p className="event__speaker">Gustavo Freire <span>Front-End na Evolux</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Events;
