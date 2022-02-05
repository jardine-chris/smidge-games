import React, { useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";

import { VideoEmbed } from "../../components/VideoEmbed/VideoEmbed";
import { EmblaCarouselDots } from "../../components/EmblaCarousel/EmblaCarouselDots";
import { EmblaCarouselGallery } from "../../components/EmblaCarousel/EmblaCarouselGallery";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import logoImg from "../../public/images/games/fear-factory/logo/logo-transparent.png";

import {
  getAllUserTweets,
  getUserByUsername,
} from "../../utils/twitter-requests";

import styles from "./fear-factory.module.scss";
import { RoadmapCard } from "../../components/Card/RoadmapCard/RoadmapCard";
import { TwitterCarouselSlide } from "../../components/Twitter/TwitterCarouselSlide";
import axios from "axios";

export default function FearFactory({ tweets, roadmapData }) {
  const preAlphaList = [];
  const earlyAccessList = [];
  const alphaList = [];
  const betaList = [];

  roadmapData.map((data) => {
    if (data.stage == "Pre-Alpha") {
      preAlphaList.push(data);
    } else if (data.stage == "Early Access") {
      earlyAccessList.push(data);
    } else if (data.stage == "Alpha") {
      alphaList.push(data);
    } else if (data.stage == "Beta") {
      betaList.push(data);
    }
  });

  return (
    <section className="mb-16">
      {/* Fixed background images. */}
      <div className={styles.bgImg} />
      <section>
        {/* Fear Factory logo. */}
        <article className="relative w-2/3 py-16 mx-auto md:py-16 xl:w-1/4">
          <Image src={logoImg} />
        </article>
        {/* Trailer container. */}
        <article className="m-auto max-w-[52rem]">
          <VideoEmbed
            src="https://www.youtube.com/embed/m0Jcf3LmPRQ"
            title="Fear Factory Announcement Trailer"
          />
        </article>
      </section>

      <section className="px-4 py-8 m-auto mt-16 text-sm text-gray-400 border rounded lg:w-1/2 border-grurp-600/70 font-montserrat bg-grurp-700/30 backdrop-blur-md">
        <div className="text-center">
          <span className="text-4xl text-red-700 font-spooky">
            scare &bull;
          </span>{" "}
          <span className="text-5xl text-red-600 uppercase font-spooky">
            terrify
          </span>{" "}
          <span className="text-3xl text-red-700 font-spooky">
            &bull; thrill
          </span>
        </div>
        <p className="mt-2 text-lg text-center text-white uppercase xl:px-16">
          Bring the haunted attraction of your nightmares to life!
        </p>
        <p className="mt-2 xl:px-16">
          Build and design elaborate attractions with incredible detail to scare
          your guests enough to leave before they can reach the exit, or risk
          losing fear reputation and cash.
        </p>
      </section>

      <div>
        <div className={`${styles.carouselBg} bg-green-900/70 backdrop-blur-sm relative mt-16`}>
          <h1 className="px-4 pt-8 text-2xl tracking-wide text-white uppercase font-lato xl:pl-64">
            <span className="font-light">In-Game </span>
            <span className="font-black text-orange-600 font-spooky">
              Screenshots
            </span>
          </h1>
          <p className="px-4 font-light tracking-wide text-white font-montserrat xl:pl-64">
            <span className="font-normal text-orange-600 font-spooky">
              Get a glimpse
            </span>
            <span className="text-gray-300"> of the game.</span>
          </p>
          <EmblaCarouselGallery />
        </div>
      </div>

      {/* Early access roadmap container. */}
      <section className="mt-16">
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
    </section>
  );
}

export async function getServerSideProps() {
  // const user = await getUserByUsername("smidgeg");
  // const userId = await user.id;

  // const tweets = await getAllUserTweets();

  const roadmapDataUrl =
    "https://api.smidgegames.com/wp-json/mo/v1/fear-factory-roadmap";
  const getRoadmap = await axios.get(roadmapDataUrl);
  const data = await getRoadmap.data;

  return {
    props: { roadmapData: data },
  };
}
