import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "./EmblaCarouselGalleryButtons";
import Image from "next/image";

import styles from "./EmblaCarouselGallery.module.scss";

export const EmblaCarouselGallery = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[
        item.replace("../../public/images/games/fear-factory/in-game", "")
      ] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context(
      "../../public/images/games/fear-factory/in-game",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    skipSnaps: true,
    loop: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="py-8 bg-grurp-800/80 backdrop-blur-sm embla">
      <h1 className="px-4 text-2xl tracking-wide text-white uppercase font-lato">
        <span className="font-light">In-Game </span><span className="font-black text-orange-600 font-spooky">Screenshots</span>
      </h1>
      <p className="px-4 font-light tracking-wide text-white font-montserrat">
        <span className="font-normal text-orange-600 font-spooky">Get a glimpse</span>
        <span className="text-gray-300"> of the game.</span>
      </p>
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {Object.keys(images).map((index) => (
            <div className="relative p-6 ml-4 w-96 embla__slide" key={index}>
              <div
                className={`${styles.carouselImgContainer} embla__slide__inner w-96`}
              >
                <Image
                  className=" embla__slide__img"
                  src={images[index].default.src}
                  alt="A cool cat."
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="invisible lg:visible">
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <style jsx>{`
        .embla {
          position: relative;
          max-width: 100vw;
          margin-left: auto;
          margin-right: auto;
        }

        .embla__viewport {
          overflow: hidden;
          width: 100%;
        }

        .embla__viewport.is-draggable {
          cursor: move;
          cursor: grab;
        }

        .embla__viewport.is-dragging {
          cursor: grabbing;
        }

        .embla__container {
          display: flex;
          user-select: none;
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          -webkit-tap-highlight-color: transparent;
          margin-left: -10px;
        }

        .embla__slide__inner {
          position: relative;
          overflow: hidden;
          height: 190px;
        }

        .embla__slide__img {
          position: absolute;
          display: block;
          top: 50%;
          left: 50%;
          min-height: 100%;
          min-width: 100%;
          max-width: none;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
};
