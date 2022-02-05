import { useState, useEffect } from "react";
import { Card } from "./Card";
import axios from "axios";
import { getDate } from "../../utils/datetime";
import { ImSpinner9, ImArrowDown2 } from "react-icons/im";

export const CardSection = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [postData, setPostData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const getPosts = async () => {
    setIsFetching(true);
    axios(`https://api.smidgegames.com/wp-json/wp/v2/posts`, {
      params: {
        per_page: 1,
        page: page,
      },
    }).then((res) => {
      console.log(`Headers: ${res.headers["x-wp-total"]}`);
      setTotalPages(res.headers["X-WP-TotalPages"]);
      setPostData([...postData, ...res.data]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(page <= totalPages);

      setIsFetching(false);
    });
  };

  useEffect(async () => {
    getPosts();
  }, []);

  return (
    <div>
      <h1 className="my-4 text-2xl text-center text-white uppercase md:my-8 md:text-5xl font-lato">
        Latest News
      </h1>
      <div className="grid grid-cols-1 px-2 pb-2 gap-y-6 sm:px-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
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
      <div className="px-2">
        {isFetching && (
          <button
            disabled
            className="w-full py-2 text-gray-400 rounded bg-grurp-700"
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
    </div>
  );
};
