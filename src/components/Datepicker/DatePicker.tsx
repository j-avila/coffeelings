import { useContext } from 'react';
import { AppContext } from '@/context/appContext';

// datePicker
const DatePicker = () => {
  const { currentDate, setCurrentDate } = useContext(AppContext);

  // function to move between months and years
  const handleDate = (type: string) => {
    const months = [
      {
        id: 1,
        value: 'January',
      },
      {
        id: 2,
        value: 'February',
      },
      {
        id: 3,
        value: 'March',
      },
      {
        id: 4,
        value: 'April',
      },
      {
        id: 5,
        value: 'May',
      },
      {
        id: 6,
        value: 'June',
      },
      {
        id: 7,
        value: 'July',
      },
      {
        id: 8,
        value: 'August',
      },
      {
        id: 9,
        value: 'September',
      },
      {
        id: 10,
        value: 'October',
      },
      {
        id: 11,
        value: 'November',
      },
      {
        id: 12,
        value: 'December',
      },
    ];

    const currentMonth = (type: string) => {
      const queryMonth =
        type === 'prev'
          ? currentDate.monthNumber - 1
          : currentDate.monthNumber + 1;

      const queryYear =
        type === 'prev' && currentDate.monthNumber <= 12
          ? currentDate.year - 1
          : type === 'next' && currentDate.monthNumber >= +12
            ? currentDate.year + 1
            : currentDate.year;

      const result = months.find((month) => month.id === queryMonth);

      return { ...result, year: queryYear };
    };

    const daySelected = currentMonth(type);

    setCurrentDate({
      year: daySelected?.year || 2024,
      month: daySelected?.value || 'January',
      monthNumber: daySelected?.id || 1,
    });
  };

  return (
    <div className="flex items-center justify-center gap-6 py-4">
      <i
        className="fa-solid fa-chevron-left"
        onClick={() => handleDate('prev')}
      />
      <i className="fa-regular fa-calendar-days" />
      <h3 className="text-4xl font-yesteryear">{currentDate.month}</h3>
      <span>{currentDate.year}</span>
      <i
        className="fa-solid fa-chevron-right"
        onClick={() => handleDate('next')}
      />
    </div>
  );
};

export default DatePicker;
