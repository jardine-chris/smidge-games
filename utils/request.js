import axios from "axios";
import useSWR from "swr";

export function request(reqUrl) {
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(reqUrl, fetcher);

  return {
      data: data,
      isLoading: !error && !data,
      isError: error
  }
}
