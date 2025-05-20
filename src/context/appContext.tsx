// app context
import dayjs from 'dayjs';
import { getNowObj } from '@utils/date';
import { PayloadProps } from '@models/types';

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

export { AppProvider } from './appContextDef';
