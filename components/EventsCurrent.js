import React from 'react';

const Events = () => (
  <section id="incoming-events" className="events">
    <h1 className="section-title">Próximos Eventos?</h1>
    <div className="events__container">
      <div className="events__block">
        <div className="col-3 events__time">
          <span>15.06</span>
          <span>8:30H ÀS 12</span>
        </div>
        <div className="col-9 events__body">
          <div className="events__title">Em breve serão postados mais informações</div>
          <div className="events__location">IMD UFRN</div>
        </div>
      </div>
    </div>
  </section>
);

export default Events;
