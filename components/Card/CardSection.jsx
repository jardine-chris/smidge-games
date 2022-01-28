import { useState, useEffect } from "react";
import { Card } from "./Card";
import axios from "axios";
import useSWR from "swr";
import { getDate } from "../../utils/datetime";
import { FeaturedImage } from "../FeaturedImage/FeaturedImage";

export const CardSection = () => {
  const allPostsUrl = "https://api.smidgegames.com/wp-json/wp/v2/posts";
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(allPostsUrl, fetcher);
  if (error) <p>Loading failed...</p>;
  if (!data) <h1>loading...</h1>;

  return (
    <div>
      <h1 className="mb-4 text-2xl text-center text-white uppercase font-lato">
        News
      </h1>
      <div className="grid grid-cols-1 px-2 pb-2 gap-y-6 sm:px-8 bg-zinc-900 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {data &&
          data.map((post) => (
            <Card
              key={post.id}
              featuredImageUrl={post._links["wp:featuredmedia"][0].href}
              title={post.title.rendered}
              subtitle={getDate(post)}
              content={
                <div
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              }
            />
          ))}
      </div>
    </div>
  );
};
