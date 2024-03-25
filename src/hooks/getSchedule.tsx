import { axiosInstance } from '@/api/axios';
import { AppContext } from '@/context/appContext';
import { useContext, useEffect, useState } from 'react';

const useSchedule = () => {
  const [date, setDate] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { currentDate } = useContext(AppContext);

  const getCurrentDate = (yearData: { [x: string]: { [x: string]: any } }) => {
    const year = currentDate.year?.toString();
    const month = currentDate.month?.toLocaleLowerCase();

    return yearData[year][month];
  };

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

  return { date, isLoading };
};

export default useSchedule;
