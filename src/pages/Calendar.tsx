import { useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import DatePicker from '@/components/Datepicker';
import CoffeeSpinner from '@/components/CoffeeSpinner';
import useSchedule from '@/hooks/getSchedule';
import CalendarComponent from '@/components/Datepicker/CalendarComponent';

const Calendar = () => {
  const { date, isLoading } = useSchedule();

  useEffect(() => {
    console.log('💻', date);
  }, [date]);

  return (
    <div className="note-bg">
      <div className="flex flex-col items-center justify-between w-100 h-[100vh]">
        <Header title="Journal" back settings />
        <DatePicker />
        {isLoading ? <CoffeeSpinner /> : <CalendarComponent />}
        <Footer />
      </div>
    </div>
  );
};

export default Calendar;
