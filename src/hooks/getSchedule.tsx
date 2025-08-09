import { axiosInstance } from '@/api/axios';
import { useAppContext } from '@/context/AppContext';
import { useEffect, useState } from 'react';
import { DailyRoast, Schedule, DateEnum, Roast } from '../models/types';
import dayjs from 'dayjs';

interface DaysOfMonth {
  [year: string]: { [month: string]: { [day: number]: DailyRoast } };
}

//FIXME: rebuild the logic to take the current date based in the current year and month

const useSchedule = () => {
  const [date, setDate] = useState<DailyRoast>();
  const [isLoading, setLoading] = useState(true);
  const context = useAppContext();

  if (!context) {
    throw new Error('useSchedule must be used within an AppProvider');
  }

  const { currentDate } = context;

  const createDaysOfMonth = (year: number, month: number) => {
    const daysInMonth = dayjs(`${year}-${month}`, 'YYYY-MM').daysInMonth();

    console.log('🐾', daysInMonth);

    const days: DaysOfMonth = {
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

  const getCurrentDate = async () => {
    try {
      const { data } = await axiosInstance.get<Schedule>('/calendar/2024');
      console.log('📅', data);
    } catch (error) {
      console.error('Error fetching schedule:', error);
    }
  };

  useEffect(() => {
    createDaysOfMonth(dayjs().year(), dayjs().month() + 1);
  }, []); // dependency is now stable due to useCallback

  return { date, currentDate, isLoading };
};

export default useSchedule;
