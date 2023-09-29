export interface opening {
  name: string;
  dayStartAM: Date;
  dayEndAM: Date;
  dayStartPM: Date;
  dayEndPM: Date;
}

export const openingsDefault: Array<opening> = [
  {
    name: 'lundi',
    dayStartAM: new Date('1970-01-01T12:00:00.000Z'),
    dayEndAM: new Date('1970-01-01T15:00:00.000Z'),
    dayStartPM: new Date('1970-01-01T18:00:00.000Z'),
    dayEndPM: new Date('1970-01-01T22:00:00.000Z'),
  },
  {
    name: 'mardi',
    dayStartAM: new Date('1970-01-01T12:00:00.000Z'),
    dayEndAM: new Date('1970-01-01T15:00:00.000Z'),
    dayStartPM: new Date('1970-01-01T18:00:00.000Z'),
    dayEndPM: new Date('1970-01-01T22:00:00.000Z'),
  },
  {
    name: 'mercredi',
    dayStartAM: new Date('1970-01-01T12:00:00.000Z'),
    dayEndAM: new Date('1970-01-01T15:00:00.000Z'),
    dayStartPM: new Date('1970-01-01T18:00:00.000Z'),
    dayEndPM: new Date('1970-01-01T22:00:00.000Z'),
  },
  {
    name: 'jeudi',
    dayStartAM: new Date('1970-01-01T12:00:00.000Z'),
    dayEndAM: new Date('1970-01-01T15:00:00.000Z'),
    dayStartPM: new Date('1970-01-01T18:00:00.000Z'),
    dayEndPM: new Date('1970-01-01T22:00:00.000Z'),
  },
  {
    name: 'vendredi',
    dayStartAM: new Date('1970-01-01T12:00:00.000Z'),
    dayEndAM: new Date('1970-01-01T15:00:00.000Z'),
    dayStartPM: new Date('1970-01-01T18:00:00.000Z'),
    dayEndPM: new Date('1970-01-01T22:00:00.000Z'),
  },
  {
    name: 'samedi',
    dayStartAM: new Date('1970-01-01T12:00:00.000Z'),
    dayEndAM: new Date('1970-01-01T15:00:00.000Z'),
    dayStartPM: new Date('1970-01-01T18:00:00.000Z'),
    dayEndPM: new Date('1970-01-01T22:00:00.000Z'),
  },
  {
    name: 'dimanche',
    dayStartAM: new Date('1970-01-01T12:00:00.000Z'),
    dayEndAM: new Date('1970-01-01T15:00:00.000Z'),
    dayStartPM: new Date('1970-01-01T18:00:00.000Z'),
    dayEndPM: new Date('1970-01-01T22:00:00.000Z'),
  },
];
