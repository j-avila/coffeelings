import React, { SetStateAction, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import TextEditor from '../TextEditor';

type Day = {
  roast?: string;
  day?: number;
  [key: number]: unknown;
};

type CalendarProps = {
  data: { month: string; year: string; yearData: []; [key: number]: Day };
  currentDate: { month: string; year: string; monthNumber: number };
};

type DayCubeProps = {
  day: number;
  data?: Day;
  handleAction: React.Dispatch<SetStateAction<Day | undefined>>;
};

// day item component
const DayCube = ({ day, data = undefined, handleAction }: DayCubeProps) => {
  return (
    <div
      className="flex justify-center items-center p-2 w-[45px] h-[45px] bg-ok text-lg text-white hover:cursor-pointer"
      onClick={() => handleAction(data)}
    >
      <span>{day}</span>
    </div>
  );
};

// calendar component
const Calendar = ({ data, currentDate }: CalendarProps) => {
  const [days, setDays] = useState([] as number[]);
  const [daySelected] = useState<Day | undefined>();

  const test = (e: unknown) => console.log(e); // TODO: Specify correct type for e
  const getDaysInMonth = (year: number, month: number) => {
    // Month in dayjs is 0-based, so January is 0, and December is 11.
    const monthDays = dayjs(`${year}-${month + 1}-01`).daysInMonth();
    return monthDays;
  };

  const getDay = (year: number, month: number, day: number) => {
    const daySelected = data?.[year]?.[month]?.[day];
    console.log('firstDay', data[year]); // TODO: crear el mes actual en caso de no tenerlo
    return daySelected;
  };

  useEffect(() => {
    const today = dayjs();
    const daysInMonth = getDaysInMonth(today.year(), today.month());
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setDays(daysArray);
    console.log('le data', data, currentDate);
  }, [data, currentDate]);

  return (
    <div className="w-80">
      <div className="flex flex-wrap justify-start gap-2 ">
        {data && days.length >= 1
          ? days?.map((day) => (
              <DayCube
                day={day}
                key={day}
                data={getDay(Number(currentDate.year), Number(currentDate.monthNumber), day)} // Ensure year and monthNumber are numbers
                handleAction={test}
              />
            ))
          : ''}
      </div>
      <hr className="my-3 border-black border-1" />
      <TextEditor data={daySelected} />
    </div>
  );
};

export default Calendar;
