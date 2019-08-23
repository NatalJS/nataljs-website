import React, { Fragment } from 'react';
import { Settings, DateTime } from 'luxon';
import last from 'lodash/last';
import SignUp from 'components/signUp';

Settings.defaultZoneName = 'America/Recife';

const showDateTime = (dateTimeISO) => {
  const dateTime = DateTime.fromISO(dateTimeISO);

  return dateTime.minute === 0 ? (
    `${dateTime.toFormat('HH')}H`
  ) : (
    `${dateTime.toFormat('HH:mm')}H`
  );
};

const showMonthAndDay = startAtISO => (
  DateTime.fromISO(startAtISO).toFormat('LL.dd')
);


const showDuration = (startAt, endAt) => (
  `${showDateTime(startAt)} ÀS ${showDateTime(endAt)}`
);

const eventMediaClass = index => `media event__media event__media--sticker${(index % 4) + 1}`;

const Events = ({ events }) => {
  const event = last(events);

  return (
    <section id="incoming-events" className="events">
      <h1 className="section-title">Próximos Eventos</h1>
      <div className="events__container">
        <div className="events__block">
          <div className="col-3 events__time">
            <span>{showMonthAndDay(event.startAt)}</span>
            <span>{showDuration(event.startAt, event.endAt)}</span>
          </div>
          <div className="col-9 events__body">
            <div className="events__title">{event.title}</div>
            <div className="events__location">{event.address}</div>
          </div>
        </div>
        {event.subscriptionLink && (
          <div className="events__block">
            <SignUp subscriptionLink={event.subscriptionLink} />
          </div>
        )}
        <div className="events__block">
          {event.sections.map((section => (
            <Fragment key={section.id}>
              <div className="events__day">
                {section.title}{' '}<span>{section.subtitle}</span>
              </div>
              {section.description && (
                <p className="offset-sm-3">{section.description}</p>
              )}
              {section.talks && (
                <div className="events__speakers">
                  {section.talks.map((talk, index) => (
                    <div key={talk.id} className={eventMediaClass(index)}>
                      <img className="event__image" src={talk.image} alt={talk.speaker} />
                      <div className="media-body">
                        <div className="events__date-time">{showDateTime(talk.startAt)}</div>
                        <h4 className="event__talk">{talk.title}</h4>
                        <p className="event__speaker">{talk.speaker}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Fragment>
          )))}
        </div>
        {event.sponsors && event.sponsors.map(sponsor => (
          <div
            key={sponsor.id}

            className="w-100 d-flex flex-column align-items-center justify-content-center"
            style={{
              backgroundColor: 'white',
              padding: 20,
            }}
          >
            <span
              style={{
                alignSelf: 'flex-start',
              }}
            >
            Patrocinado por
            </span>
            <a href={sponsor.link} target="_blank" title={sponsor.name} rel="noopener noreferrer">
              <img width={150} alt={sponsor.name} src={sponsor.image} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
