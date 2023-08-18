import axios from 'axios';

export const bpcRequest = axios.create({
  baseURL: process.env.BPC_HOME_PAGE,
  timeout: 10000,
});

export const backendRequest = axios.create({
  baseURL: process.env.BACKEND_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_TOKEN}`,
  },
});
