import { Settings, DateTime } from 'luxon';

Settings.defaultZoneName = 'America/Recife';

// eslint-disable-next-line import/prefer-default-export
export const isFuture = endAtISO => {
  const dateTime = DateTime.fromISO(endAtISO)
    .diffNow()
    .valueOf();

  return dateTime > 0;
};
