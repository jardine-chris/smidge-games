export const Card = (props) => {
  return (
    <article className="mb-4 overflow-hidden rounded-lg shadow-xl bg-zinc-800 ring-1 ring-zinc-900/5">
      <div className="container">
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl text-white font-lato">
          {props.title}
        </h3>
          <h4 className="text-orange-600 font-light text- font-montserrat">Coming Soon</h4>
        <p className="mt-2 text-sm tracking-tight text-zinc-400 font-montserrat">
          {props.description}
        </p>
      </div>
    </article>
  );
};
