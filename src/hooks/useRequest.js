import useSWR from 'swr';

const baseUrl = 'https://www.breakingbadapi.com/api/';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useRequest = (path) => {
  const url = baseUrl + path;
  const { data, error } = useSWR(url, fetcher);
  return { data, error };
};
