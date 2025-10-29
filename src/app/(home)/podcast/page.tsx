"use client";

import { useEffect, useState } from "react";
import { getPodcast, Podcast } from "@/data/getPodcast"; // Ensure you import the type for Podcast
import PodcastAudio from "@/Components/podcast/PodcastAudio";
import { getArticle, Article } from "@/data/getArticle"; // Import getArticle function

const PodcastSide = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]); // Store podcasts data
  const [article, setArticle] = useState<Article | null>(null); // Store article data

  useEffect(() => {
    // Fetch the podcast data when the component mounts
    const fetchPodcasts = async () => {
      try {
        const data = await getPodcast();
        setPodcasts(data);
      } catch (error) {
        console.error("Failed to fetch podcasts:", error);
      }
    };

    // Fetch article data when the component mounts
    const fetchArticle = async () => {
      try {
        const data = await getArticle();
        setArticle(data[0]); // Assuming we're getting an array, just use the first article for now
      } catch (error) {
        console.error("Failed to fetch article:", error);
      }
    };

    fetchPodcasts();
    fetchArticle();
  }, []);

  // Ensure podcasts are loaded before attempting to access `podcasts`
  if (podcasts.length === 0) return <div>Loading podcasts...</div>;
  if (!article) return <div>Loading article...</div>; // Ensure article is loaded

  return (
    <section className="max-w-[1000px] mx-auto justify-center px-5 md:px-0">
      <div className="flex flex-col gap-6">
        {/* Render img content from article */}
        {article.content.slice(2, 3).map((contentItem, index) => (
          <figure key={index} className="relative w-full">
            {/* Image */}
            <img
              src={`http://localhost:3001/assets/images/${contentItem.url}`}
              alt={contentItem.altText || "Article Image"}
              className="w-full h-auto object-cover"
            />

            {/* Yellow Box */}
            <div className="absolute bottom-4 right-4 yellow p-6 rounded-lg shadow-md w-[350px] h-[200px]">
              {/* Empty Text Box inside the yellow box */}
              <p className="text-white text-5xl font-semibold">Lorem ipsum dolor sit.</p>
            </div>
          </figure>
        ))}

        {/* Map through all podcasts and render them */}
        {podcasts.map((podcast) => (
          <figure
            key={podcast._id}
            className="border p-4 flex flex-row items-center gap-4"
          >
            {/* Podcast Thumbnail */}
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/assets/podcast/${podcast.thumbnail}`}
              alt={podcast.headline}
              className="object-cover rounded-lg w-full h-48 mb-4"
            />

            {/* Headline and Audio Player */}
            <section className="flex flex-col w-full items-center gap-4 px-4">
              {/* Headline */}
              <figcaption className="text-center w-full">
                <h3 className="text-xl font-bold">{podcast.headline}</h3>
                <p className="text-gray-500 text-sm">{podcast.info}</p>
              </figcaption>

              {/* Audio Player */}
              <div className="w-full mt-4">
                <PodcastAudio podcast={podcast} />
              </div>
            </section>

            {/* Extra Text */}
            <p className="px-4 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus, amet tempora tempore delectus repudiandae quaerat
              necessitatibus nostrum deleniti in, laudantium laboriosam pariatur
              quis iure aspernatur. Voluptas debitis magnam quo dolores sint,
            </p>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default PodcastSide;
