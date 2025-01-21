// app context
import { createContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getNowObj } from '@utils/date';
import { AppContextProps, Day, PayloadProps } from '@models/types';

// Create a context for the app
const initialState: PayloadProps = {
  roast: 'ok',
  message: '',
  date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  now: getNowObj(),
  settings: {
    fontSize: 16,
    theme: 'light',
  },
};

type Error = { error: boolean; message: string };

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }: AppContextProps) => {
  const [state, setState] = useState<PayloadProps>(initialState);
  const [currentDate, setCurrentDate] = useState<Day>({
    year: dayjs().year() || 2024,
    month: dayjs().format('MMMM'),
    monthNumber: dayjs().month() + 1 || 1,
  });
  const [error, setError] = useState<Error>({ error: false, message: '' });

  // Provide the app context
  const theme = `pb-10 text-[${state?.settings?.fontSize}px]`;
  const payload = {
    state,
    setState,
    currentDate,
    setCurrentDate,
    error,
    setError,
  };

  useEffect(() => {
    console.log('🌯', state);
  }, [state]);

  return (
    <div className={theme}>
      <AppContext.Provider value={payload}>{children}</AppContext.Provider>
    </div>
  );
};
