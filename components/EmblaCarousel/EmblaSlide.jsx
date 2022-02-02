export const EmblaSlide = (props) => {
  const responsiveInner = "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3";
  const responsiveImage = "xl:col-span-2";
  return (
    <div className="embla__slide">
      <div className={`${props.responsive ? responsiveInner : ""} embla__slide__inner`}>
        <img
          className={`${props.responsive ? responsiveImage : ""} object-cover w-full`}
          src={props.imgSrc}
          alt={props.imgAlt}
        />
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
