import { createContext } from 'react';
import { Day } from '@models/types';

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

export const AppContext = createContext<PayloadProps | undefined>(undefined);
