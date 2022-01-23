export const EmblaSlide = (props) => {
  return (
    <div className="embla__slide">
      <div className="embla__slide__inner">
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
    </div>
  );
};
