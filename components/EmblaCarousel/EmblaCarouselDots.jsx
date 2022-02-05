import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { DotButton } from "./EmblaCarouselButtons";
import Head from "next/head";

export const EmblaCarouselDots = (props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="bg-zinc-800">
      <div>
        <h1 className="pt-16 pb-8 pl-8 text-3xl text-left text-white font-lato">Games</h1>
        <div className="pl-8 embla__viewport" ref={viewportRef}>
          <div className="relative w-full embla__container">{props.children}</div>
        </div>
      </div>
      <div className="flex my-8 embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
      <style jsx>{`
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
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 100%;
          height: auto;
          user-select: none;
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .embla__slide {
          position: relative;
          min-width: 100%;
        }

        .embla__slide__inner {
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .embla__slide__img {
          position: absolute;
          display: block;
          top: 50%;
          left: 50%;
          width: auto;
          min-height: 100%;
          min-width: 100%;
          max-width: none;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
};
