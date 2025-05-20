import { http, HttpResponse } from 'msw';
import data from './history';

export const handlers = [
  // An example handler
  http.get('/calendar/:id', () => {
    return HttpResponse.json(data);
  }),
];

// http.post(firebaseUrl, () => {
//   return HttpResponse.json(user);
// }),
