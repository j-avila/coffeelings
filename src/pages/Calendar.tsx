import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const historyItem = [
  {
    id: 1,
    roast: 'tired',
    message:
      'Well this bitch dont stop talking about herslef and is quite anoiyng',
    date: '2024-02-28 16:31:51',
  },
  {
    id: 2,
    roast: 'ok',
    message:
      'Well this bitch dont stop talking about herslef and is quite anoiyng',
    date: '2024-02-27 12:00:00',
  },
];

const Calendar = () => {
  return (
    <div className="flex flex-col items-center justify-between w-100 h-[100vh]">
      <Header title="Journal" back settings />
      Calendar
      <Footer />
    </div>
  );
};

export default Calendar;
