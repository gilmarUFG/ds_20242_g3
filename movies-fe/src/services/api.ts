import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://18.217.112.15:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});
