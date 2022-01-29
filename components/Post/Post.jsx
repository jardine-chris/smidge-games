import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { FeaturedImage } from "../FeaturedImage/FeaturedImage";
import { request } from "../../utils/request";
import { getDate } from "../../utils/datetime";
import { Label } from "../Misc/Label"
import { Categories } from "../Misc/Categories"

export const Post = (props) => {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [categories, setCategories] = useState([]);

  function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === "function";
  }

  useEffect(async () => {
    const req = async () => {
      setCategories([])
      const postUrl = `https://api.smidgegames.com/wp-json/wp/v2/posts/${props.slug}`;
      let post = await axios.get(postUrl);
      setPost(post.data);

      const authorUrl = post.data["_links"].author[0].href;
      let author = await axios.get(authorUrl);
      setAuthor(author.data);

      const categoryList = post.data.categories;
      const categoryUrls = categoryList.map((id) => {
        return `https://api.smidgegames.com/wp-json/wp/v2/categories/${id}`;
      });
      Promise.all(
        categoryUrls.map(async (url) => {
          let category = await axios.get(url);
          setCategories(categories => [...categories, category.data])
        })
      );
    };
    req();
  }, []);

  return (
    <article className="">
      <header className="border-b-1 border-grurp-800">
        <h1 className="px-4 mt-8 text-2xl text-white uppercase md:my-8 md:text-5xl font-lato">
          {post && post.title.rendered}
        </h1>
        <Categories className="flex flex-wrap gap-2 px-4 mt-4">
          {categories &&
            categories.map((category) => {
              return <Label key={category.id} name={category.name} />;
            })}
        </Categories>
        <hr className="my-4 border-1 border-grurp-700" />
        <div className="">
          <FeaturedImage
            url={post && post["_links"]["wp:featuredmedia"][0].href}
          />
        </div>
      </header>
      <section className="p-6 mx-2 my-8 font-light border rounded font-montserrat bg-grurp-900 border-grurp-700">
        <p className="text-sm text-white">
          By <span className="underline">{author && author.name}</span>
        </p>
        <p className="text-sm text-gray-500">{post && getDate(post)}</p>
        <div
          className="mt-4 text-lg text-gray-300"
          dangerouslySetInnerHTML={post && { __html: post.content.rendered }}
        />
      </section>
    </article>
  );
};
