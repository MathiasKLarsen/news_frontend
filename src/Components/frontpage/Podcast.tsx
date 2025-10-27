import { getPodcast } from "@/data/getPodcast"

const Podcast = async () => {
  const podcastData = await getPodcast();

  return (
    <section className="max-w-[1000px] mx-auto justify-center">
      <h2 className="text-4xl font-bold mb-10">
        Podcast
      </h2>
      <section className="flex flex-row gap-x-5">
        {podcastData.map((item, index) => (
          <img key={index} src={`http://localhost:3001/assets/podcast/${item.thumbnail}`} alt="" />
        ))}
      </section>
    </section>
  )
}

export default Podcast