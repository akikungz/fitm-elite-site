"use client";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Paper from "@/components/Paper";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { events } from "@/data/events";
import { home_cards } from "@/data/home_card";
import { papers } from "@/data/papers";
import { Divider } from "@mantine/core";
import { IconArrowRight, IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const words = [
  "communication",
  "innovation",
  "technology",
  "knowledge",
  "data science",
  "software engineering",
  "natural language processing",
  "machine learning",
  "artificial intelligence",
  "network engineering"
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // loop index of words array from 0 to words.length - 1
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Banner */}
      <Hero
        title={
          <>
            Nothing Impossible <br />
            In the{" "}
          </>
        }
        description="We are an interdisciplinary creative playground rooted squarely in academic excellence by Professors & Students in FITM"
        main
      />

      {/* Home Card */}
      <div className="container mx-auto -mt-16">
        <BentoGrid className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-12 gap-2 p-4">
          {home_cards.map((card, index) => (
            <BentoCard key={index} {...card} className="col-span-3" />
          ))}
        </BentoGrid>
      </div>

      {/* Group */}
      <div className="relative text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
          style={{
            backgroundImage: "url(/images/image_5.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute backdrop-blur-md inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/70 -z-10 w-full h-full" />
        <div className="container mx-auto py-24 px-16 flex flex-col gap-8 bg-none">
          <h2 className="text-5xl md:text-6xl font-bold text-center">
            Visit our discussion group
          </h2>
          <span className="text-2xl text-center">
            Discuss with our lab members through our Facebook group to exchange
            knowledge or collaborate with our members on research — it should be
            a creative, inclusive space. To foster this environment, & members
            make self-directed projects
          </span>

          <button className="flex flex-row space-x-2 items-center justify-center bg-green-500 hover:bg-green-700 text-white py-3 px-8 mx-auto rounded-full">
            <span className="text-xl">Visit the group</span>
            <IconArrowRight />
          </button>
        </div>
      </div>

      {/* Events */}
      <div className="flex flex-col gap-4 mt-8" id="event">
        <div className="px-4 lg:px-0 container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span>Events by our </span>
            <span className="text-green-500">professors and students</span>
          </h2>
          <span className="text-gray-300 md:text-lg">
            Our lab members love sharing their knowledge with others and gaining
            experience from us.
          </span>
        </div>

        <Carousel items={events} className="px-8" />
      </div>

      <div className="mx-auto container">
        <Divider my="md" mx="xl" />
      </div>

      {/* Research */}
      <div
        className="flex flex-col gap-1 mt-4 mx-auto container justify-center pb-4"
        id="research"
      >
        <h2 className="text-4xl font-bold md:text-center text-black px-4">
          Collectors of papers
        </h2>
        <span className="text-gray-300 text-lg md:text-center px-4 pb-4 transition-all ease-in-out duration-300">
          We are an interdisciplinary research lab working to invent the future
          of <span className="text-green-500">#{words[wordIndex]}</span>
        </span>

        <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 gap-4 px-4">
          {papers.map((paper, index) => (
            <Paper key={index} data={paper} className="col-span-3" />
          ))}
        </div>

        <Link
          href="/research"
          className="flex flex-row space-x-2 items-center justify-center bg-green-500 hover:bg-green-700 text-white py-3 px-8 mx-auto rounded-full mt-4"
        >
          <span className="text-xl">View more</span>
          <IconChevronDown />
        </Link>
      </div>
    </>
  );
}
