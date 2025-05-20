import { createContext, useState, useEffect, ReactNode } from 'react';
import dayjs from 'dayjs';
import { getNowObj } from '@utils/date';
import { Day } from '@models/types';

interface AppContextProps {
  children: ReactNode;
}

interface PayloadProps {
  roast: string;
  message: string;
  date: string;
  now: { year: number; month: string; day: number };
  settings: {
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
}

const initialState: PayloadProps = {
  roast: 'ok',
  message: '',
  date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  now: getNowObj(),
  settings: {
    fontSize: 16,
    theme: 'light',
  },
  currentDate: {
    year: dayjs().year() || 2024,
    month: dayjs().format('MMMM'),
    monthNumber: dayjs().month() + 1 || 1,
  },
  setCurrentDate: () => {},
};



import { AppContext } from './AppContext';

export const AppProvider = ({ children }: AppContextProps) => {
  const [state] = useState<PayloadProps>(initialState);
  const [currentDate, setCurrentDate] = useState<Day>(initialState.currentDate);

  // Provide the app context
  const theme = `pb-10 text-[${state?.settings?.fontSize}px]`;
  const payload = {
    ...state,
    currentDate,
    setCurrentDate,
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
