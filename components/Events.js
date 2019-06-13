import React from 'react';
import SignUp from 'components/signUp';

const Events = () => (
  <section id="incoming-events" className="events">
    <h1 className="section-title">Próximos Eventos</h1>
    <div className="events__container">
      <div className="events__block">
        <div className="col-3 events__time">
          <span>15.06</span>
          <span>8H30 ÀS 12H</span>
        </div>
        <div className="col-9 events__body">
          <div className="events__title">Natal JS 2: Javascripters, rejoice!</div>
          <div className="events__location">IMD UFRN</div>
        </div>
      </div>
      <div className="events__block">
        <SignUp />
      </div>
      <div className="events__block">
        <div className="events__day">
          PALESTRAS: SALA B206
          {' '}<span>INICIO 8H30</span>
        </div>
        <div className="events__speakers">
          <div className="media event__media event__media--sticker1">
            <img className="event__image" src="/static/images/speakers/avatar-stefan.png" alt="Stefan" />
            <div className="media-body">
              <h4 className="event__talk">Javascript everywhere</h4>
              <p className="event__speaker">Stefan Yohansson</p>
            </div>
          </div>
          <div className="media event__media event__media--sticker2">
            <img className="event__image" src="/static/images/speakers/avatar-wallysson.png" alt="Wallysson" />
            <div className="media-body">
              <h4 className="event__talk">JavaScript para programadores Python</h4>
              <p className="event__speaker">Wallysson Lima</p>
            </div>
          </div>
          <div className="media event__media event__media--sticker3">
            <img className="event__image" src="/static/images/speakers/avatar-gilmar.png" alt="Gilmar" />
            <div className="media-body">
              <h4 className="event__talk">React Native autenticação com AWS Amplify</h4>
              <p className="event__speaker">Gilmar Silva</p>
            </div>
          </div>
          <div className="media event__media event__media--sticker4">
            <img className="event__image" src="/static/images/speakers/avatar-daniel.png" alt="Daniel" />
            <div className="media-body">
              <h4 className="event__talk">Desenvolvimento 3D na web</h4>
              <p className="event__speaker">Daniel Fernandes</p>
            </div>
          </div>
        </div>
        <div className="events__day">
          COFFEE BREAK
          {' '}<span>10H25</span>
        </div>

        <div className="events__day">
          WORKSHOPS
          {' '}<span>INÍCIO 10H50</span>
        </div>

        <p className="offset-sm-3">Os workshops ocorrerão simultaneamente.</p>

        <div className="events__speakers">
          <div className="media event__media event__media--sticker1">
            <img className="event__image" src="/static/images/speakers/avatar-stefan.png" alt="Stefan" />
            <div className="media-body">
              <div className="events__location">SALA A303</div>
              <h4 className="event__talk">Contribuição para grandes projetos opensource</h4>
              <p className="event__speaker">Stefan Yohansson </p>
            </div>
          </div>
          <div className="media event__media event__media--sticker2">
            <img className="event__image" src="/static/images/speakers/avatar-gustavo.png" alt="Gustavo" />
            <div className="media-body">
              <div className="events__location">SALA A104</div>
              <h4 className="event__talk">Criando sua primeira aplicação em React.js</h4>
              <p className="event__speaker">Gustavo Freire </p>
            </div>
          </div>
        </div>

      </div>
      <div
        className="w-100 d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundColor: 'white',
          padding: 20,
        }}
      >
        <span
          style={{
            alignSelf: 'flex-start'
          }}
        >
          Patrocinado por
        </span>
        <a target="_blank" href="https://www.evolux.net.br/vagas"><img width={150} alt="evolux logo"src="/static/images/evolux.svg"/></a>
      </div>
    </div>
  </section>
);

export default Events;
