import { useState, useEffect } from "react";
import { Card } from "./Card";
import axios from "axios";
import { getDate } from "../../utils/datetime";
import { ImSpinner9, ImArrowDown2 } from "react-icons/im";

export const CardSection = () => {
  const [page, setPage] = useState(1);
  const [postData, setPostData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsFetching(true);
      if (hasMore) {
        axios(`https://api.smidgegames.com/wp-json/wp/v2/posts`, {
          params: {
            per_page: 4,
            page: page,
          },
        }).then((res) => {
          setPostData([...postData, ...res.data]);
          setPage((prevPage) => {
            if (page < res.headers["x-wp-total"]) {
              return prevPage + 1;
            }
          });
          setHasMore(page < res.headers["x-wp-total"]);

          setIsFetching(false);
        });
      }
    };
    getPosts();
  }, [page, postData, setPostData, hasMore]);

  return (
    <div className="px-2 lg:px-8 2xl:px-16 main-container">
      <h1 className="pt-16 pb-4 text-3xl text-left text-white font-lato">
        Latest News
      </h1>
      <div className="grid grid-cols-1 pb-2 gap-y-6 sm:grid-cols-2 sm:gap-8 2xl:grid-cols-4">
        {postData &&
          postData.map((post) => (
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
              id={post.id}
            />
          ))}
      </div>
      <div className="pb-16">
        {isFetching && (
          <button
            disabled
            className="w-full py-2 text-gray-400 rounded bg-slate-700"
          >
            <ImSpinner9 className="inline text-orange-600 animate-spin" />
          </button>
        )}
        {!isFetching && hasMore && (
          <div className="mt-4 text-center">
            <button
              className="relative w-12 h-12 py-2 text-white bg-orange-600 rounded-full animate-bounce"
              onClick={getPosts}
            >
              <ImArrowDown2 className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </button>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .main-container {
            background: radial-gradient(
              circle at -20% -20%,
              #1e313b,
              #1e303a,
              #1c2d36,
              #1a2931,
              #18242b,
              #151f24,
              #12191d,
              #0e1417,
              #090d10,
              #040608,
              #010202,
              #000000 45%
            );
          }
        `}
      </style>
    </div>
  );
};
