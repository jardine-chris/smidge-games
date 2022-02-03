export const EmblaSlideCustom = (props) => {
    const responsiveInner = "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3";
    const responsiveImage = "xl:col-span-2";
    return (
      <div className="embla__slide">
        <div className="embla__slide__inner">
          {props.children}
        </div>
      </div>
    );
  };
  