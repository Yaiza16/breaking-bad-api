import axios from 'axios';

export const apiCall = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
});

export const apiGetCharacterByName = 'characters?name=';
export const apiGetQuoteByCharacterName = 'quote/random?author=';
