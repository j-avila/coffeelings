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

export interface Schedule {
  '2024': { [key: string]: DailyRoast[] };
}

export interface DailyRoast {
  id: number;
  roast: Roast;
  message: string;
  date: DateEnum;
}

export enum DateEnum {
  The20240 = '2024-0',
  The20240102120000 = '2024-01-02 12: 00: 00',
  The20240103091500 = '2024-01-03 09: 15: 00',
  The20240104183000 = '2024-01-04 18: 30: 00',
  The20240228163151 = '2024-02-28 16: 31: 51',
}

export enum Roast {
  Excited = 'excited',
  Happy = 'happy',
  Ok = 'ok',
  Tired = 'tired',
}
