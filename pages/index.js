import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";

import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "../components/EmblaCarousel/EmblaCarousel";
import { EmblaSlide } from "../components/EmblaCarousel/EmblaSlide";
import { Card } from "../components/Card/Card";

import { CardSection } from "../components/Card/CardSection";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className="bg-zinc-900">
      <Navbar />
      <EmblaCarousel>
        <EmblaSlide
          imgSrc="/images/games/fear-factory/images/01.jpg"
          imgAlt="Photo from Fear Factory."
          title="Fear Factory"
          content={
            <div>
              <p>
                Scare, terrify and thrill guests as you build the haunted
                attraction of your nightmares.
              </p>
              <p>
                Build and design elaborate attractions with incredible detail to
                scare your guests enough to leave before they can reach the
                exit, or risk losing fear reputation and cash.
              </p>
            </div>
          }
        />
        <EmblaSlide
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
          imgSrc="/images/games/the-ensign/images/01.jpg"
          imgAlt="Photo from The Ensign."
          title="The Ensign"
          content={
            <div>
              <p>
                The Ensign is a game I have been working on since the summer of
                2020. Here is one of the most recent level previews and the
                first &quot;Zero G&quot; level in the game.
              </p>
            </div>
          }
        />
      </EmblaCarousel>

      <CardSection />
    </div>
  );
}
