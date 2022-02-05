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
    align: "center",
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
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {Object.keys(images).map((index) => (
            <div className="relative p-6 ml-4 embla__slide" key={index}>
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
        <div className="absolute flex justify-between invisible w-screen px-16 -translate-y-1/2 top-1/2 lg:visible">
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
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
