import React from "react";
import axios from "axios";
import useSWR from "swr";

export const FeaturedImage = ({ url }) => {
  const fetcher = async (url) =>
    await axios
      .get(url)
      .then((res) => res.data.media_details.sizes.full.source_url);
  const { data, error } = useSWR(url, fetcher);
  if (error) <p>Loading failed...</p>;
  if (!data) <h1>loading...</h1>;
  return <img src={data} alt="" />;
};
