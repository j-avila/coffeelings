import { http, HttpResponse } from 'msw';
import data from './history';
import { user } from './users';

const firebaseUrl =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=:key';

export const handlers = [
  // An example handler
  http.get('/calendar/:id', () => {
    return HttpResponse.json(data);
  }),
];

// http.post(firebaseUrl, () => {
//   return HttpResponse.json(user);
// }),
