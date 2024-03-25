// app context
import dayjs from 'dayjs';
import React, { createContext, useEffect, useState } from 'react';
import { getNowObj } from '@utils/date';

export type Day = {
  month?: string;
  year?: number;
  monthNumber: number;
};

interface AppContextProps {
  children: React.ReactNode;
  value?: {
    state: PayloadProps;
    setState: React.Dispatch<React.SetStateAction<PayloadProps>>;
    error: boolean;
    setError: React.Dispatch<React.SetStateAction<string>>;
    currentDate: Day;
    setCurrentDate: React.Dispatch<React.SetStateAction<Day>>;
  };
}

// Create a provider for the app context
type PayloadProps = {
  message: string;
  roast: string;
  now: { year: number; month: string; day: number };
  date: string;
  settings?: {
    fontSize: number;
    theme: string;
  };
  user?: {
    email: string;
    uid: string;
    token: string;
    displayName: string;
  };
  currentDate: Day;
  setSettings?: React.Dispatch<React.SetStateAction<PayloadProps>>;
  setUser?: React.Dispatch<React.SetStateAction<PayloadProps>>;
  setCurrentDate: React.Dispatch<React.SetStateAction<Day>>;
};

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
