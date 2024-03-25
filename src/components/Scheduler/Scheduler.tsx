import React, { SetStateAction, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import TextEditor from '../TextEditor';

type Day = {
  roast?: string;
  day?: number;
};

// day item component
const DayCube = ({
  day,
  data = undefined,
  handleAction,
}: {
  day: number;
  data?: Day;
  handleAction: React.Dispatch<SetStateAction<Day | undefined>>;
}) => {
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
const Calendar = ({ data }: { data?: any }) => {
  const [days, setDays] = useState([] as number[]);
  const [daySelected, setDaySelected] = useState<Day | undefined>();
  const getDaysInMonth = (year: number, month: number) => {
    // Month in dayjs is 0-based, so January is 0, and December is 11.
    return dayjs(`${year}-${month + 1}-01`).daysInMonth();
  };

  // TODO: añadir logica de cubo seleccionado

  useEffect(() => {
    const today = dayjs();
    const daysInMonth = getDaysInMonth(today.year(), today.month());
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setDays(daysArray);
  }, []);

  return (
    <div className="w-80">
      <div className="flex flex-wrap justify-start gap-2 ">
        {days.map((day, index) => (
          <DayCube
            day={day}
            key={day}
            data={data[index]}
            handleAction={setDaySelected}
          />
        ))}
      </div>
      <hr className="my-3 border-black border-1" />
      <TextEditor data={daySelected} />
    </div>
  );
};

export default Calendar;
