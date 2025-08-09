import { http, HttpResponse } from 'msw';
import data from './history';

export const handlers = [
  http.get('/calendar/:year', () => {
    return HttpResponse.json(data);
  }),
];

// http.post(firebaseUrl, () => {
//   return HttpResponse.json(user);
// }),
