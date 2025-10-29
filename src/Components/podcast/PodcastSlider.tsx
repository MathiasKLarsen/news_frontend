"use client";

import { useState } from "react";
import { Podcast as PodcastType } from "@/data/getPodcast"; // Import PodcastType to enforce types
import PodcastAudio from "./PodcastAudio"; // Import the PodcastAudio component
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

interface PodcastSliderProps {
  podcasts: PodcastType[]; // Define the expected prop type
}

const PodcastSlider = ({ podcasts }: PodcastSliderProps) => {
  const [current, setCurrent] = useState(0); // Track current podcast index

  // Function to go to the previous podcast
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? podcasts.length - 1 : prev - 1));
  };

  // Function to go to the next podcast
  const nextSlide = () => {
    setCurrent((prev) => (prev === podcasts.length - 1 ? 0 : prev + 1));
  };

  if (podcasts.length === 0) {
    return <div>Loading...</div>; // Show a loading message if no podcasts
  }

  return (
    <section>
      {/* Podcast Display */}
      <figure className="grid grid-cols-[40%_60%] gap-x-5 border p-4 min-w-[500px]">
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}/assets/podcast/${podcasts[current].thumbnail}`}
          alt={podcasts[current].headline}
          className="object-cover rounded-lg md:size-80 size-40"
        />
        <section className="flex flex-col justify-between">
          <figcaption className="max-w-[300px]">
            <h3 className="text-xl font-bold">{podcasts[current].headline}</h3>
            <p className="text-gray-500 text-sm">{podcasts[current].info}</p>
            {/* Pass the current podcast object to the PodcastAudio component */}
          </figcaption>
          <div className="md:w-[400px] w-[200px]">
            <PodcastAudio podcast={podcasts[current]} />
          </div>
        </section>
      </figure>

      {/* Navigation Buttons */}
      <div className="relative flex justify-center items-center space-x-5 my-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="bg-white text-black rounded-full p-2 hover:bg-gray-200 z-10"
        >
          <IoIosArrowDropleft />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="bg-white text-black rounded-full p-2 hover:bg-gray-200 z-10"
        >
          <IoIosArrowDropright />
        </button>
      </div>
    </section>
  );
};

export default PodcastSlider;
