import { useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import CalendarSchedule from '@/components/Scheduler';
import DatePicker from '@/components/Datepicker';
import CoffeeSpinner from '@/components/CoffeeSpinner';
import useSchedule from '@/hooks/getSchedule';
import CalendarTwo from '@/components/calendarTwo';

const Calendar = () => {
  const { date, currentDate, isLoading } = useSchedule();

  useEffect(() => {
    console.log('💻', date);
  }, [date]);

  return (
    <div className="note-bg">
      <div className="flex flex-col items-center justify-between w-100 h-[100vh]">
        <Header title="Journal" back settings />
        <DatePicker />
        {isLoading ? (
          <CoffeeSpinner />
        ) : (
          // <CalendarSchedule data={date} currentDate={currentDate} />
          <CalendarTwo />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Calendar;
