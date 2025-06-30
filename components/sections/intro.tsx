"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Intro() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),
  );

  const imageUrls = [
    "/stones-optimised.jpg",
    "/inside_sauna_light_source.jpg",
    "/outside_powerlines_night.jpg",
    "/sauna_bts_outside-optimised.jpg",
  ];

  return (
    <section className="py-8 md:py-16 px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-36 w-full flex">
      <div className="w-full flex-col space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">
          The Sauna
        </h1>

        <Carousel
          plugins={[plugin.current]}
          className="w-full bg-[url('/pattern.png')] bg-cover bg-center"
        >
          <CarouselContent>
            {imageUrls.map((imageUrl, index: number) => (
              <CarouselItem key={index}>
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={imageUrl}
                    alt="Slideshow Image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    className="object-center object-cover rounded-3xl lg:rounded-xl shadow-md"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex flex-col text-base md:text-lg space-y-4 lg:space-y-6 xl:space-y-8">
          <p>
            All season sauna was created for our love of nature and wellness.
            Built outside on Scotlands north east coast in rain/wind/sunshine
            and snow, sometimes all in one day.
          </p>
          <p>
            The ethos of our sauna is to give the best sauna wellbeing
            experience. The heart of the sauna is the heater, which is a Nordic
            style large stone capacity to produce the best Loyly, (steam). It’s
            outside fed wood fired, to minimise any Smokey smell inside.
          </p>
          <p>
            Made with the most sustainable materials available. With the outside
            clad in long lasting western red cedar, to the inside cladding is
            the most durable thermo Aspen, to the heater stones sourced from the
            local beach.
          </p>
        </div>
      </div>
    </section>
  );
}
