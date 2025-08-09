// app context
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getNowObj } from '@utils/date';
import { PayloadProps } from '@';
import { createContext } from 'react';

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

const AppContext = createContext(initialState);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<PayloadProps>(initialState);

  useEffect(() => {
    // Initialize or fetch any necessary data here
    console.log('🙏🏽:', state);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// TODO: revisar el state que exporta el context
export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppProvider;
