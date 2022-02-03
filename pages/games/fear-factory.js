import React from "react";
import Image from "next/image";

import { VideoEmbed } from "../../components/VideoEmbed/VideoEmbed";
import { EmblaCarousel } from "../../components/EmblaCarousel/EmblaCarousel";
import { EmblaCarouselGallery } from "../../components/EmblaCarousel/EmblaCarouselGallery";

import logoImg from "../../public/images/games/fear-factory/logo/logo-transparent.png";

import {
  getAllUserTweets,
  getUserByUsername,
} from "../../utils/twitter-requests";

import styles from "./fear-factory.module.scss";
import { RoadmapCard } from "../../components/Card/RoadmapCard/RoadmapCard";
import { EmblaSlideCustom } from "../../components/EmblaCarousel/EmblaSlideCustom";

export default function FearFactory({ tweets }) {
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
        {/* Fixed background images. */}
        <div className={styles.bgImg} />

        {/* Fear Factory logo. */}
        <div className="relative w-2/3 py-8 mx-auto md:py-16 xl:w-1/4">
          <Image src={logoImg} />
        </div>
        {/* Trailer container. */}
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
      </div>

      {/* Early access roadmap container. */}
      <section>
        {/* Header with background svg. */}
        <div className="relative">
          <img
            className="w-screen h-48"
            src="/graphics/pointed-container-edge.svg"
            alt=""
          />
          <h1 className="absolute w-full pb-4 text-3xl text-center uppercase -bottom-8 text-grurp-100 font-spooky">
            Early Access Roadmap
          </h1>
        </div>

        {/* Stage car section. */}
        <section className="grid items-start grid-cols-1 px-4 pt-12 bg-black gap-y-6 sm:px-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          <RoadmapCard
            title="Pre-Alpha"
            date="Fall 2021"
            content={preAlphaList}
            bgPosition="bg-right"
          />
          <RoadmapCard
            title="Early Access"
            date="Q1 2022"
            content={earlyAccessList}
            bgPosition="bg-right-center"
          />
          <RoadmapCard
            title="Alpha"
            date="Spring 2022"
            content={alphaList}
            bgPosition="bg-left-bottom"
          />
          <RoadmapCard
            title="Beta"
            date="Summer 2022"
            content={betaList}
            bgPosition="bg-center-bottom"
          />
        </section>
        <div className="relative rotate-180">
          <img
            className="w-screen h-48"
            src="/graphics/pointed-container-edge.svg"
            alt=""
          />
        </div>
      </section>
      <div className={`${styles.carouselBg} mt-16`}>
        <EmblaCarouselGallery />
      </div>
      <div>
        <EmblaCarousel>
          {tweets.map((tweet) => {
            return <EmblaSlideCustom>
              <div dangerouslySetInnerHTML={{ __html : tweet.html }}></div>
            </EmblaSlideCustom>;
          })}
        </EmblaCarousel>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const user = await getUserByUsername("smidgeg");
  const userId = await user.id;

  const tweets = await getAllUserTweets(userId);

  return {
    props: { tweets },
  };
}
