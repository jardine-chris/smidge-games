import { useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarousel } from "../components/EmblaCarousel/EmblaCarousel";
import { EmblaSlide } from "../components/EmblaCarousel/EmblaSlide";

import { CardSection } from "../components/Card/CardSection";
import Link from "next/link";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  return (
    <div className="bg-black">
      <div className="border-b border-grurp-800">
        <EmblaCarousel>
          <EmblaSlide
            responsive
            imgSrc="/images/games/fear-factory/hero/01.jpg"
            imgAlt="Photo from Fear Factory."
            title="Fear Factory"
            content={
              <div>
                <p>
                  Scare, terrify and thrill guests as you build the haunted
                  attraction of your nightmares.
                </p>
                <p>
                  Build and design elaborate attractions with incredible detail
                  to scare your guests enough to leave before they can reach the
                  exit, or risk losing fear reputation and cash.
                </p>
                <Link href="/games/fear-factory">
                  <button className="w-full py-2 mt-4 font-bold tracking-wide text-orange-600 uppercase transition duration-150 border-2 border-orange-600 rounded-md bg-grurp-800 hover:bg-orange-600 hover:text-white">
                    More Info
                  </button>
                </Link>
              </div>
            }
          />
          <EmblaSlide
            responsive
            imgSrc="/images/games/treasure-hunt/loading-screens/18.jpg"
            imgAlt="Photo from Treasure Hunt."
            title="Treasure Hunt"
            content={
              <div>
                <p>Ahoy, Matey! You&apos;ve found treasure afloat!</p>
                <p>
                  Smash the treasures open with your cannonball to reveal the
                  treasures value!
                </p>
                <p>
                  Find hidden collectibles to reveal new locations and new
                  treasure!
                </p>
              </div>
            }
          />
          <EmblaSlide
            responsive
            imgSrc="/images/games/the-ensign/images/01.jpg"
            imgAlt="Photo from The Ensign."
            title="The Ensign"
            content={
              <div>
                <p>
                  The Ensign is a game I have been working on since the summer
                  of 2020. Here is one of the most recent level previews and the
                  first &quot;Zero G&quot; level in the game.
                </p>
              </div>
            }
          />
        </EmblaCarousel>
      </div>

      <CardSection />
    </div>
  );
}
