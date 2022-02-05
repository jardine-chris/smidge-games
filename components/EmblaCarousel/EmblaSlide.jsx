import bgImg from "../../public/images/games/the-ensign/images/01.jpg";

export const EmblaSlide = (props) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 overflow-hidden shadow-[5px_5px_5px_rgba(0,0,0,0.45)] rounded-xl main-container">
      <div className="w-3/4 py-16 m-auto">
        <img src={props.logo} alt="" />
      </div>

      <div className="lg:col-span-2 slanted-div-wrapper">
        <div className="h-full slanted-div" />
      </div>
      <style jsx>
        {`
          .slanted-div {
            background-image: url("${props.imgSrc}");
            background-size: cover;
            background-position: center;

            clip-path: polygon(10% 0, 100% 0%, 100% 100%, 20% 100%, 0% 90%);
            transition: clip-path 0.25s;
          }

          .slanted-div-wrapper,
          .slanted-div-wrapper:hover {
            filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
          }

          // Move clip-path on hover. Not working with drop-shadow?
          // .main-container:hover .slanted-div {
          //   clip-path: polygon(20% 0, 100% 0%, 100% 100%, 20% 100%, 0% 50%);
          // }

          .main-container {
            background: rgb(0, 0, 0);
            background: linear-gradient(
              142deg,
              rgba(0, 0, 0, 1) 10%,
              ${props.highlightColor} 100%
            );
          }
        `}
      </style>
    </div>
  );
};
