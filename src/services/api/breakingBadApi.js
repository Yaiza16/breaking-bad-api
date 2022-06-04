import axios from 'axios';

export const baseUrl = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
});

export const apiGetCharacterByName = 'characters?name=';
export const apiGetQuoteByCharacterName = 'quote/random?author=';
