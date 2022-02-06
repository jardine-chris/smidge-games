import useSWR from "swr";

export default function LatestPosts() {
  const allPostsUrl =
    "https://api.smidgegames.com/wp-json/wp/v2/posts?per_page=4";
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(allPostsUrl, fetcher);
  if (error) <p>Loading failed...</p>;
  if (!data) <h1>loading...</h1>;
  return (
    <div>
      {/* {data.map((post) => {
        return <h1>{post.title.rendered}</h1>;
      })} */}
    </div>
  );
}
