import { FeaturedImage } from "../FeaturedImage/FeaturedImage";

export const Card = (props) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-xl bg-zinc-800 ring-1 ring-zinc-900/5">
      <div className="container">
        <FeaturedImage url={props.featuredImageUrl} />
      </div>
      <div className="px-6 py-8">
        <h4 className="text-xs font-light text-orange-600 text- font-montserrat">
          {props.subtitle}
        </h4>
        <h3 className="text-xl font-bold tracking-wide text-white font-lato">
          {props.title}
        </h3>
      </div>
    </article>
  );
};
