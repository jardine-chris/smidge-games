import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {useState, useEffect, useCallback} from "react";
import Link from "next/link";
import {DotButton, PrevButton, NextButton} from "./EmblaCarouselButtons";

export const EmblaCarousel = (props) => {
    const [viewportRef, embla] = useEmblaCarousel({
        skipSnaps: false,
        loop: true,
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback(
        (index) => embla && embla.scrollTo(index),
        [embla]
    );

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <>
            <div className="bg-zinc-900 embla">
                <div className="embla__viewport" ref={viewportRef}>
                    <div className="embla__container">
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="bg-zinc-900 embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default EmblaCarousel;
