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

  roadmapData.reduce(function (arr, data) {
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
        <div className="">
          <VideoEmbed
            src="https://www.youtube.com/embed/m0Jcf3LmPRQ"
            title="Fear Factory Announcement Trailer"
          />
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
      <div className={`${styles.carouselBg} mt-16`}>
        <EmblaCarouselGallery />
      </div>
    </div>
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
