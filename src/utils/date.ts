import dayjs from 'dayjs';

export const getNowObj = () => {
  return {
    year: dayjs().get('year'),
    month: dayjs().format('MMM'),
    day: dayjs().get('date'),
  };
};
