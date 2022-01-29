export const EmblaSlide = (props) => {
  return (
    <div className="embla__slide">
      <div className="grid grid-cols-1 embla__slide__inner lg:grid-cols-2 xl:grid-cols-3">
        <img className="object-cover w-full xl:col-span-2" src={props.imgSrc} alt={props.imgAlt} />
        <div className="px-6 pt-4 md:px-8">
          <h1 className="text-xl font-bold text-white font-lato">
            {props.title}
          </h1>
          <p className="mt-2 font-light leading-relaxed tracking-tight text-gray-400 text-md md:text-base xl:text-lg xl:leading-normal font-montserrat">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};
