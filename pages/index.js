import { useEffect } from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";

import styles from "../styles/Home.module.scss";

import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "../components/EmblaCarousel/EmblaCarousel";
import { EmblaSlide } from "../components/EmblaCarousel/EmblaSlide";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Montserrat:wght@100;200;300;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
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
    </div>
  );
}
