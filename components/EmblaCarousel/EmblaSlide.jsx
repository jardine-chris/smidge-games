export const EmblaSlide = (props) => {
  return (
    <div className="embla__slide">
      <div className="grid grid-cols-1 embla__slide__inner lg:grid-cols-2">
        <img className="w-full" src={props.imgSrc} alt={props.imgAlt} />
        <div className="px-6 pt-4">
          <h1 className="text-xl font-bold text-white font-lato">
            {props.title}
          </h1>
          <p className="mt-2 text-sm tracking-tight text-zinc-400 font-montserrat">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};
