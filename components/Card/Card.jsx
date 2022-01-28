import Link from "next/link";
import { FeaturedImage } from "../FeaturedImage/FeaturedImage";

export const Card = (props) => {
  return (
    <Link href={`/posts/${encodeURIComponent(props.id)}`}>
      <article
        className="overflow-hidden rounded-lg shadow-xl cursor-pointer bg-zinc-800 ring-1 ring-zinc-800"
        key={props.id}
      >
        <div className="container">
          <FeaturedImage url={props.featuredImageUrl} />
        </div>
        <div className="px-6 py-4">
          <h4 className="text-xs font-light text-orange-600 md:text-base font-montserrat">
            {props.subtitle}
          </h4>
          <h3 className="text-xl font-bold tracking-wide text-white font-lato">
            {props.title}
          </h3>
        </div>
      </article>
    </Link>
  );
};
