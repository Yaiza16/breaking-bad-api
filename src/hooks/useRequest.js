import axios from 'axios';
import useSWR from 'swr';

const baseUrl = 'https://www.breakingbadapi.com/api/';
const fetcher = (url) => axios.get(url).then((res) => res.data);

const useRequest = (path) => {
  const url = baseUrl + path;
  const { data, error, mutate, isValidating } = useSWR(url, fetcher);

  return {
    data,
    error,
    mutate,
    isValidating,
  };
};

export default useRequest;
