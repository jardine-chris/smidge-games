export const EmblaSlide = (props) => {
  return (
    <div className="embla__slide">
      <div className="grid grid-cols-1 embla__slide__inner lg:grid-cols-2 xl:grid-cols-3">
        <img className="xl:col-span-2" src={props.imgSrc} alt={props.imgAlt} />
        <div className="px-6 pt-4 md:px-16">
          <h1 className="text-xl font-bold text-zinc-200 font-lato">
            {props.title}
          </h1>
          <p className="mt-2 font-light leading-relaxed tracking-tight text-md md:text-base xl:text-lg xl:leading-normal text-zinc-400 font-montserrat">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};
