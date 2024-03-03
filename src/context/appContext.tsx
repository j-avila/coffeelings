// app context
import dayjs from 'dayjs';
import React, { createContext, useEffect, useState } from 'react';
import { getNowObj } from '@utils/date';

interface AppContextProps {
  children: React.ReactNode;
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

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }: AppContextProps) => {
  const [state, setState] = useState<PayloadProps>(initialState);

  // Provide the app context
  const theme = `container pb-10 text-[${state?.settings?.fontSize}px]`;

  const payload = { state, setState };

  useEffect(() => {
    console.log('🌯', state);
  }, [state]);

  return (
    <div className={theme}>
      <AppContext.Provider value={payload}>{children}</AppContext.Provider>
    </div>
  );
};
