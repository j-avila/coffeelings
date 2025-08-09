import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const CalendarComponent: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [calendarDays, setCalendarDays] = useState<dayjs.Dayjs[]>([]);

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startOfWeek = startOfMonth.startOf('week');
  const endOfWeek = endOfMonth.endOf('week');

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const generateCalendar = () => {
    const calendar = [];
    let day = startOfWeek;

    while (day.isBefore(endOfWeek, 'day')) {
      calendar.push(day);
      day = day.add(1, 'day');
    }

    return calendar;
  };

  useEffect(() => {
    const days = generateCalendar();
    console.log('Generated days:', days);
    setCalendarDays(days);
  }, []);

  useEffect(() => {
    console.log('Calendar updated:', calendarDays);
  }, [calendarDays]);

  return (
    <div>
      <header>
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>{currentDate.format('MMMM YYYY')}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </header>
      <div className="calendar-grid">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day.isSame(currentDate, 'month') ? '' : 'disabled'}`}
          >
            {day.date()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;
