import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://18.116.47.16:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});
