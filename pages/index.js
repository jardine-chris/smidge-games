import useEmblaCarousel from "embla-carousel-react";
import { EmblaSlide } from "../components/EmblaCarousel/EmblaSlide";

import { CardSection } from "../components/Card/CardSection";
import Link from "next/link";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  return (
    <div className="bg-black">
      <CardSection />

      <div className="py-16 bg-zinc-800">
        <h1 className="pb-8 pl-4 text-3xl text-left text-white 2xl:pl-16 font-lato">
          Games
        </h1>
        <div className="grid grid-cols-1 px-4 gap-x-4 md:grid-cols-2 gap-y-8 2xl:px-16 2xl:grid-cols-3">
          <EmblaSlide
            responsive
            imgSrc="/images/games/fear-factory/hero/01.jpg"
            imgAlt="Photo from Fear Factory."
            title="Fear Factory"
            logo="/images/games/fear-factory/logo/logo-transparent.png"
            highlightColor="rgb(93, 20, 12)"
          />
          <EmblaSlide
            responsive
            imgSrc="/images/games/treasure-hunt/loading-screens/18.jpg"
            imgAlt="Photo from Treasure Hunt."
            title="Treasure Hunt"
            highlightColor="rgb(92, 38, 28)"
            logo="/images/games/treasure-hunt/logo/logo-transparent.png"
          />
          <EmblaSlide
            responsive
            imgSrc="/images/games/the-ensign/images/01.jpg"
            imgAlt="Photo from The Ensign."
            logo="/images/games/the-ensign/logo/logo-transparent.png"
            title="The Ensign"
            highlightColor="rgb(184, 185, 184)"
          />
        </div>
      </div>
    </div>
  );
}
