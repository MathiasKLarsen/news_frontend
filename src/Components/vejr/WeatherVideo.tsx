import { getVideo } from "@/data/getVideo";

const WeatherVideo = async () => {
  const videoData = await getVideo();

  return (
    <>
      {/* Videos Section */}
      <section className="grid md:grid-cols-2 grid-cols-1 space-y-4">
        {videoData.slice(0, 2).map((item, index) => (
          <figure key={index} className="grid grid-cols-2 gap-4">
            {/* Video */}
            <video
              src={`http://localhost:3001/assets/video/${item.url}`}
              controls
              className="w-full"
            />

            {/* Video details */}
            <figcaption className="flex flex-col">
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p>{item.description}</p>
              <p className="mt-auto">
                <span className="text-[#e89700] font-bold">{item.title}</span> |{" "}
                {item.duration} sekunder siden
              </p>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
};

export default WeatherVideo;
