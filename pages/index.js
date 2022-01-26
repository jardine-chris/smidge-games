import {useEffect} from "react";
import {Navbar} from "../components/Navbar/Navbar";

import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "../components/EmblaCarousel/EmblaCarousel";
import {EmblaSlide} from "../components/EmblaCarousel/EmblaSlide";
import {Card} from "../components/Card/Card";

export default function Home() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: false});

    useEffect(() => {
        if (emblaApi) {
            // Embla API is ready
        }
    }, [emblaApi]);

    return (
        <div>
            <Navbar/>
            <EmblaCarousel>
                <EmblaSlide
                    imgSrc="/images/games/fear-factory/images/01.jpg"
                    imgAlt="Photo from Fear Factory."
                />
                <EmblaSlide
                    imgSrc="/images/games/treasure-hunt/loading-screens/18.jpg"
                    imgAlt="Photo from Treasure Hunt."
                />
                <EmblaSlide
                    imgSrc="/images/games/the-ensign/images/01.jpg"
                    imgAlt="Photo from The Ensign."
                />
            </EmblaCarousel>
            <section className="px-4 pb-2 bg-zinc-900">
                <Card
                    imgSrc="/images/games/fear-factory/images/01.jpg"
                    imgAlt="Photo from Fear Factory."
                    title="Fear Factory"
                    description="Scare, terrify and thrill guests as you build the haunted attraction of your nightmares.
        Build and design elaborate attractions with incredible detail to scare your guests enough to leave before they can reach the exit, or risk losing fear reputation and cash."
                />
                <Card
                    imgSrc="/images/games/treasure-hunt/loading-screens/18.jpg"
                    imgAlt="Photo from Treasure Hunt."
                    title="Treasure Hunt"
                    description="Ahoy, Matey! You've found treasure afloat!
          Smash the treasures open with your cannonball to reveal the treasures value!
          Find hidden collectibles to reveal new locations and new treasure!"
                />
                <Card
                    imgSrc="/images/games/the-ensign/images/01.jpg"
                    imgAlt="Photo from The Ensign."
                    title="The Ensign"
                    description="The Ensign is a game I have been working on since the summer of 2020. Here is one of the most recent level previews and the first 'Zero G' level in the game."
                />
            </section>
        </div>
    );
}
