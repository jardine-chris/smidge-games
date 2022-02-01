import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => await axios.get(url).then((res) => res.data);

export function request(reqUrl) {
  const { data, error } = useSWR(reqUrl, fetcher);

  return {
      data: data,
      isLoading: !error && !data,
      isError: error
  }
}

export function getTweets(url) {
  
}