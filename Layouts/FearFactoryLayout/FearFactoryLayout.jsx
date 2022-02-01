import Image from "next/image";
import React from "react";
import { VideoEmbed } from "../../components/VideoEmbed/VideoEmbed";
import { EmblaCarousel } from "../../components/EmblaCarousel/EmblaCarousel";
import { EmblaSlide } from "../../components/EmblaCarousel/EmblaSlide";

import logoImg from "../../public/images/games/fear-factory/logo/logo-transparent.png";

import styles from "./FearFactoryLayout.module.scss";

export const FearFactoryLayout = (props) => {
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

  return (
    <div className={`${styles.bgImg} h-screen px-2`}>
      <div className={`${styles.logoImg} relative`}>
        <Image src={logoImg} className={styles.hero} />
      </div>
      <div className="border border-orange-600 bg-grurp-800 font-montserrat">
        <div className="px-6 py-4">
          <h1 className="text-sm uppercase text-grurp-800">Teaser</h1>
          <hr className="mt-2 border-grurp-700" />
        </div>
        <div>
          <VideoEmbed
            src="https://www.youtube.com/embed/m0Jcf3LmPRQ"
            title="Fear Factory Announcement Trailer"
          />
        </div>
      </div>
      <EmblaCarousel>
        {Object.keys(images).map((img) => {
          return <EmblaSlide imgSrc={images[img].default.src}></EmblaSlide>;
        })}
      </EmblaCarousel>
    </div>
  );
};
