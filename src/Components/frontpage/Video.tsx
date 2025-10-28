import { getVideo } from "@/data/getVideo";

const Video = async () => {
  const videoData = await getVideo();

  return (
    <section className="max-w-[1000px] mx-auto justify-center px-5 md:px-0">
      <h2 className="text-4xl font-bold mb-10">Video</h2>
      <article className=" grid grid-cols-4 gap-4">
        {/* Left side: First three videos */}
        <section className="md:col-span-2 col-span-4 space-y-4">
          {videoData.slice(0, 3).map((item, index) => (
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
                  <span className="text-[#e89700] font-bold">{item.title}</span>{" "}
                  | {item.duration} sekunder siden
                </p>
              </figcaption>
            </figure>
          ))}
        </section>

        {/* Right side: The big video */}
        <section className="col-span-2 hidden md:block">
          {videoData.slice(3, 4).map((item, index) => (
            <figure key={index} className="flex flex-col">
              <video
                src={`http://localhost:3001/assets/video/${item.url}`}
                controls
                className="w-full"
              />
              <figcaption className="flex flex-col">
                <h3 className="font-semibold text-2xl">{item.title}</h3>
                <p>{item.description}</p>
                <p className="mt-auto">
                  <span className="text-[#e89700] font-bold">{item.title}</span>{" "}
                  | {item.duration} sekunder siden
                </p>
              </figcaption>
            </figure>
          ))}
        </section>
      </article>
    </section>
  );
};

export default Video;
