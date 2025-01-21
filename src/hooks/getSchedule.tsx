import { axiosInstance } from '@/api/axios';
import { AppContext } from '@/context/appContext';
import { useContext, useEffect, useState } from 'react';
import { DailyRoast, Schedule } from './types';
import dayjs from 'dayjs';

const useSchedule = () => {
  const [date, setDate] = useState<DailyRoast>();
  const [isLoading, setLoading] = useState(true);
  const { currentDate } = useContext(AppContext);

  const createDaysOfMonth = (year: number, month: number) => {
    const daysInMonth = dayjs(`${year}-${month}`, 'YYYY-MM').daysInMonth();
    const days: { [key: string]: { [key: string]: any } } = {
      [year]: {
        [month]: {},
      },
    };

    for (let day = 1; day <= daysInMonth; day++) {
      // TODO: revisar el por que no toma bien el año creado por defecto
      const date = {
        id: day,
        roast: 'ok',
        message: '',
        date: `${year}-${month}`,
      };

      days[year][month][day] = date;
    }

    return days;
  };

  const getCurrentDate = (yearData: Schedule) => {
    let DateData = createDaysOfMonth(2024, 4);
    const year = currentDate.year?.toString();
    const month = currentDate.month?.toLocaleLowerCase();

    if (!yearData[year]) {
      DateData = createDaysOfMonth(2024, 4);
    }

    console.log('🍔', { yearData, year, month });

    return DateData;
  };

  // TODO: añadir logica de obtener historial por mes y año
  const getHistory = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/calendar/1');
      const currentDate = getCurrentDate(response.data);

      setDate(currentDate);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return { date, currentDate, isLoading };
};

export default useSchedule;
