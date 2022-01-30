import React from "react";
import { FearFactoryLayout } from "../../Layouts/FearFactoryLayout/FearFactoryLayout";
import Image from "next/image";
import logoImg from "../../public/images/games/fear-factory/logo/logo-transparent.png";
import roadmapImg from "../../public/images/games/fear-factory/EARMHeader.png";
import { VideoEmbed } from "../../components/VideoEmbed/VideoEmbed";
import { EmblaCarousel } from "../../components/EmblaCarousel/EmblaCarousel";
import { EmblaSlide } from "../../components/EmblaCarousel/EmblaSlide";
import { EmblaCarouselGallery } from "../../components/EmblaCarousel/EmblaCarouselGallery";

import styles from "./fear-factory.module.scss";
import { RoadmapCard } from "../../components/Card/RoadmapCard/RoadmapCard";

export default function FearFactory() {
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

  const Status = {
    NotStarted: 0,
    InProgress: 1,
    Complete: 2,
  };

  const preAlphaList = [
    {
      data: "Implement core gameplay features and functionality",
      status: Status.InProgress,
    },
    { data: "Implement Early Access content", status: Status.Complete },
    { data: "10 scare attractions", status: Status.Complete },
    { data: "5 FX", status: Status.Complete },
    { data: "20 building pieces", status: Status.Complete },
    { data: "20 props", status: Status.Complete },
    { data: "1 save slot", status: Status.Complete },
    { data: "Implement Early Access levels", status: Status.Complete },
    { data: "Backyard Haunt", status: Status.Complete },
    { data: "The Forest", status: Status.Complete },
  ];

  const earlyAccessList = [
    {
      data: "New locations (Abandoned Factory & Old Schoolhouse",
      status: Status.NotStarted,
    },
    { data: "New scare attractions (20+)", status: Status.NotStarted },
    { data: "Progression system", status: Status.NotStarted },
    { data: "New props and themes (50+)", status: Status.NotStarted },
    { data: "New FX (10+)", status: Status.NotStarted },
    { data: "Building pieces (50+)", status: Status.NotStarted },
    { data: "Optimizations", status: Status.NotStarted },
    { data: "Technology system", status: Status.NotStarted },
    { data: "Upgrade system", status: Status.NotStarted },
    { data: "Player tutorial", status: Status.NotStarted },
    { data: "Multiple save slots", status: Status.NotStarted },
    { data: "Early access Steam launch", status: Status.NotStarted },
  ];

  const alphaList = [
    { data: "All locations implemented (20+)", status: Status.NotStarted },
    {
      data: "All scare attractions implemented (50+)",
      status: Status.NotStarted,
    },
    {
      data: "Progression/Upgrade/Technology system balancing",
      status: Status.NotStarted,
    },
    {
      data: "All props and themes implemented (200+)",
      status: Status.NotStarted,
    },
    { data: "All FX implemented (50+", status: Status.NotStarted },
    {
      data: "All building pieces implemented (200+)",
      status: Status.NotStarted,
    },
    { data: "Additional optimization", status: Status.NotStarted },
    {
      data: "Review of previous player feedback and prioritization of requests and changes",
      status: Status.NotStarted,
    },
    { data: "Campaign mode implemented", status: Status.NotStarted },
  ];

  const betaList = [
    {
      data: "Implementation of Early Access and player feedback",
      status: Status.NotStarted,
    },
    { data: "Gameplay balancing and optimization", status: Status.NotStarted },
    {
      data: "Additional testing and player feedback",
      status: Status.NotStarted,
    },
    {
      data: "Consider and implement requested props, locations, and FX",
      status: Status.NotStarted,
    },
    { data: "Bugfixes", status: Status.NotStarted },
    { data: "Release!", status: Status.NotStarted },
  ];

  return (
    <div>
      {/* <div className="bg-gradient-to-b from-transparent to-black"> */}
      <div>
        <div className={styles.bgImg} />
        <div className="relative w-2/3 py-8 mx-auto md:py-16 xl:w-1/4">
          <Image src={logoImg} />
        </div>
        <div className="mx-2 mb-16 overflow-hidden border rounded-md border-grurp-600/70 bg-grurp-700/40 backdrop-blur-sm font-montserrat lg:w-1/2 lg:mx-auto">
          <div className="px-4 pt-4">
            <h1 className="text-sm uppercase text-grurp-100">
              Watch the Teaser
            </h1>
            <hr className="my-2 border-orange-600/70" />
          </div>
          <div className="mt-4 border-t border-grurp-600">
            <VideoEmbed
              src="https://www.youtube.com/embed/m0Jcf3LmPRQ"
              title="Fear Factory Announcement Trailer"
            />
          </div>
        </div>
        <div className="relative">
          <svg
            className="block w-screen h-48"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="foreground" gradientTransform="rotate(90)">
                <stop offset="10%" stop-color="#3B3950" />
                <stop offset="95%" stop-color="black" />
              </linearGradient>
              <filter
                id="shadow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                color-interpolation-filters="linearRGB"
              >
                <feDropShadow
                  stdDeviation="5 5"
                  in="SourceGraphic"
                  dx="0"
                  dy="-5"
                  flood-color="#000000"
                  flood-opacity="0.7"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  result="dropShadow"
                />
              </filter>
            </defs>
            <g fill="url(#foreground)" filter="url(#shadow)">
              <polygon points="0,0 15,60 33,21 45,70 50,40 55,53 72,20 85,50 100,10 100,100 100,100 0,100" />
            </g>
          </svg>
          <h1 className="absolute w-full pb-4 text-3xl text-center uppercase -bottom-8 text-grurp-100 font-spooky">
            Early Access Roadmap
          </h1>
        </div>
      </div>

      <div className="px-2 pt-12 bg-black">
        <section className="grid items-start grid-cols-1 px-2 pb-2 gap-y-6 sm:px-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          <div
            className={`${styles.roadmapCardBgImg} bg-right bg-orange-600 border-2 rounded border-orange-600`}
          >
            <RoadmapCard
              title="Pre-Alpha"
              date="Fall 2021"
              content={preAlphaList}
            />
          </div>
          <div
            className={`${styles.roadmapCardBgImg} bg-right-center mt-4 bg-orange-600 border-2 rounded border-orange-600`}
          >
            <RoadmapCard
              title="Early Access"
              date="Q1 2022"
              content={earlyAccessList}
            />
          </div>
          <div
            className={`${styles.roadmapCardBgImg} bg-left-bottom mt-4 bg-orange-600 border-2 rounded border-orange-600`}
          >
            <RoadmapCard title="Alpha" date="Spring 2022" content={alphaList} />
          </div>
          <div
            className={`${styles.roadmapCardBgImg} bg-center-bottom mt-4 bg-orange-600 border-2 rounded border-orange-600`}
          >
            <RoadmapCard title="Beta" date="Summer 2022" content={betaList} />
          </div>
        </section>
      </div>
      <div className="relative rotate-180">
        <svg
          className="block w-screen h-48"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="foreground" gradientTransform="rotate(90)">
              <stop offset="10%" stop-color="#3B3950" />
              <stop offset="95%" stop-color="black" />
            </linearGradient>
            <filter
              id="shadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="linearRGB"
            >
              <feDropShadow
                stdDeviation="5 5"
                in="SourceGraphic"
                dx="0"
                dy="-5"
                flood-color="#000000"
                flood-opacity="0.7"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="dropShadow"
              />
            </filter>
          </defs>
          <g fill="url(#foreground)" filter="url(#shadow)">
            <polygon points="0,0 15,60 33,21 45,70 50,40 55,53 72,20 85,50 100,10 100,100 100,100 0,100" />
          </g>
        </svg>
      </div>
      <div className={`${styles.carouselBg} mt-16`}>
        <EmblaCarouselGallery />
      </div>
    </div>
  );
}
