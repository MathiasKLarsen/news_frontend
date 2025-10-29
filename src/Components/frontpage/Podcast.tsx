"use client";

import { useEffect, useState } from "react";
import { getPodcast, Podcast as PodcastType } from "@/data/getPodcast";
import PodcastSlider from "@/Components/podcast/PodcastSlider"; // Import the PodcastSlider component
import { FaArrowRight } from "react-icons/fa";

const PodcastFetcher = () => {
  const [podcasts, setPodcasts] = useState<PodcastType[]>([]); // State for storing podcasts

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPodcast();
        setPodcasts(data); // Set the fetched data in the state
      } catch (error) {
        console.error("Error fetching podcast data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="max-w-[1000px] mx-auto justify-center px-5 md:px-0">
      {/* Section Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold mb-4">Podcast</h2>
        <button className="text-yellow-500 hover:text-yellow-600 flex items-center gap-1 font-medium text-xl">
          Vis mere<span><FaArrowRight /></span>
        </button>
      </div>
      {/* Slider Section */}
      <PodcastSlider podcasts={podcasts} />
    </section>
  );
};

export default PodcastFetcher;
