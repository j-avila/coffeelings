import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173/',
  headers: {
    'Content-Type': 'application/json',
  },
});
