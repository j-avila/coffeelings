import { axiosInstance } from '@/api/axios';
import { useAppContext } from '@/context/AppContext';
import { useEffect, useState, useCallback } from 'react';
import { DailyRoast, Schedule, DateEnum, Roast } from '../models/types';
import dayjs from 'dayjs';

const useSchedule = () => {
  const [date, setDate] = useState<DailyRoast>();
  const [isLoading, setLoading] = useState(true);
  const context = useAppContext();

  if (!context) {
    throw new Error('useSchedule must be used within an AppProvider');
  }

  const { currentDate } = context;

  const createDaysOfMonth = (year: number, month: number) => {
    // TODO: Specify the correct type for year
    const daysInMonth = dayjs(`${year}-${month}`, 'YYYY-MM').daysInMonth();
    const days: {
      [year: string]: { [month: string]: { [day: number]: DailyRoast } };
    } = {
      [year.toString()]: {
        [month.toString()]: {},
      },
    };

    for (let day = 1; day <= daysInMonth; day++) {
      const date: DailyRoast = {
        id: day,
        roast: Roast.Ok,
        message: '',
        date: `${year}-${month}` as DateEnum,
      };
      days[year.toString()][month.toString()][day] = date;
    }

    return days;
  };

  const getCurrentDate = useCallback(
    (yearData: Schedule) => {
      let DateData = createDaysOfMonth(2024, 4); // TODO: Use dynamic year/month
      const year = currentDate.year?.toString();
      const month = currentDate.month?.toString().toLowerCase();

      if (!year || !yearData[year as keyof Schedule]) {
        DateData = createDaysOfMonth(2024, 4);
      }

      console.log('🍔', { yearData, year, month });

      return DateData;
    },
    [currentDate],
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get('/calendar/1');
        const currentDate = getCurrentDate(response.data);
        setDate(currentDate as unknown as DailyRoast); // TODO: Refactor for correct type
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []); // dependency is now stable due to useCallback

  return { date, currentDate, isLoading };
};

export default useSchedule;
