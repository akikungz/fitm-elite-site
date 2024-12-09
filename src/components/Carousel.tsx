"use client";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { cn } from "@/lib/utils";

import "@mantine/carousel/styles.css";

export interface CarouselProps {
  className?: string;
  items: {
    title: string;
    category: string;
    image: string;
  }[];
}

export default function CustomCarousel(props: CarouselProps) {
  const slides =
    props.items &&
    props.items.map((item, index) => (
      <Carousel.Slide
        key={index}
        title={item.title}
        className={cn("flex-1 flex flex-col gap-2 p-4 justify-between")}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={0}
          className="object-cover rounded-[8px] hover:scale-105 transition-transform ease-in-out duration-300"
        />
        <div className="max-w-full">
          <h3 className="text-xl font-semibold text-ellipsis line-clamp-1">
            {item.title}
          </h3>
          <p className="text-gray-300 text-ellipsis text-wrap line-clamp-1">
            {item.category}
          </p>
        </div>
      </Carousel.Slide>
    ));

  return (
    <Carousel
      className={cn(props.className, "h-full flex flex-row gap-4 flex-1")}
      align="start"
      slideSize={{
        base: "50%",
        md: "40%",
        lg: "30%",
        xl: "25%"
      }}
      slideGap={{ base: "16px" }}
      slidesToScroll={1}
      loop
      title="Carousel"
    >
      {slides}
    </Carousel>
  );
}
