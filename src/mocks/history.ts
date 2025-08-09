import { Schedule, Roast, DateEnum } from '../models/types';

const data: Schedule = {
  '2024': {
    '01': [
      {
        id: 1,
        roast: Roast.Happy,
        message: 'Loved the fruity notes!',
        date: DateEnum.The20240102120000,
      },
      {
        id: 2,
        roast: Roast.Tired,
        message: 'A bit too bitter for my taste.',
        date: DateEnum.The20240103091500,
      },
      {
        id: 3,
        roast: Roast.Ok,
        message: 'Perfect balance and aroma.',
        date: DateEnum.The20240104183000,
      },
    ],
    '02': [
      {
        id: 4,
        roast: Roast.Excited,
        message: 'Smooth and easy to drink.',
        date: DateEnum.The20240228163151,
      },
      {
        id: 5,
        roast: Roast.Happy,
        message: 'Rich flavor, great aftertaste.',
        date: DateEnum.The20240228163151,
      },
    ],
  },
};

export default data;
