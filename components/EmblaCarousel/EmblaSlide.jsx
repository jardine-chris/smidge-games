import bgImg from "../../public/images/games/the-ensign/images/01.jpg";

export const EmblaSlide = (props) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 overflow-hidden shadow-[5px_5px_5px_rgba(0,0,0,0.45)] rounded-xl main-container cursor-pointer">
      <div className="w-3/4 py-16 m-auto">
        <img src={props.logo} alt="" />
      </div>

      <div className="relative rounded-xl lg:col-span-2 slanted-div-wrapper">
        <div className="h-full rounded-xl slanted-div" />
      </div>
      <style jsx>
        {`
          .slanted-div {
            background-image: url("${props.imgSrc}");
            background-size: cover;
            background-position: center;
            transition: 0.25s ease-in-out;

            clip-path: polygon(10% 0, 100% 0%, 100% 100%, 20% 100%, 0% 90%);
          }

          // .main-container:hover .slanted-div::after {
          //   opacity: 0.5;
          // }

          .slanted-div-wrapper,
          .slanted-div-wrapper:hover {
            filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
          }

          .main-container {
            background: rgb(0, 0, 0);
            background: linear-gradient(
              142deg,
              rgba(0, 0, 0, 1) 10%,
              ${props.highlightColor} 100%
            );
            background-size: 200%;
            background-position: left;
            transition: 0.25s;
          }

          .main-container:hover {
            background-position: bottom left;
            // background: linear-gradient(
            //   142deg,
            //   ${props.highlightColor} 10%,
            //   rgba(0, 0, 0, 1) 100%
            // );
          }

          .main-container:hover .slanted-div {
            filter: brightness(130%);
          }
        `}
      </style>
    </div>
  );
};
