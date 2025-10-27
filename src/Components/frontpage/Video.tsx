import { getVideo } from "@/data/getVideo"

const Video = async () => {
  const videoData = await getVideo();

  return (
    <section className="max-w-[1000px] mx-auto justify-center">
      <h2 className="text-4xl font-bold mb-10">
        Video
      </h2>
      <section className="grid grid-cols-3 gap-x-5">
        <div className="flex flex-col">
          {videoData.slice(0, 3).map((item, index) => (
            <video key={index} src={`http://localhost:3001/assets/video/${item.url}`} controls></video>
          ))}
        </div>
        <div className="col-span-2  gap-5">
          {videoData.slice(3, 4).map((item, index) => (
            <video key={index} src={`http://localhost:3001/assets/video/${item.url}`} controls></video>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Video