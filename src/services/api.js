import axios from 'axios';

export const apiCall = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
});
