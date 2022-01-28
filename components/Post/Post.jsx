import React from "react";
import axios from "axios";
import useSWR from "swr";
import { FeaturedImage } from "../FeaturedImage/FeaturedImage";

export const Post = (props) => {
  const postUrl = `https://api.smidgegames.com/wp-json/wp/v2/posts/${props.slug}`;

  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(postUrl, fetcher);
  if (error) <p>Loading failed...</p>;
  if (!data) <h1>loading...</h1>;

  return (
      <article>
          <h1>{data && data.title.rendered}</h1>
          <FeaturedImage url={data && data["_links"]["wp:featuredmedia"][0].href} />
      </article>
  );
};
