import { getArticle } from "@/data/getArticle";

const Hero = async () => {
  const articleData = await getArticle();

  // Slices for specific sections of the article
  const firstSlice = articleData.slice(0, 1);
  const secondSlice = articleData.slice(1, 3);
  const thirdSlice = articleData.slice(3, 5);

  return (
    <section className="max-w-[1000px] mx-auto justify-center px-5 md:px-0">
      <h2 className="text-4xl font-bold mb-2">{firstSlice[0].title}</h2>
      <p className="pt-3">
        <span className="text-[#e89700] font-bold">
          {firstSlice[0].articleCategory}
        </span>{" "}
        | {new Date(firstSlice[0].publishedAt).getMinutes()} minutter siden
      </p>
      <section className="flex flex-col gap-y-15">
        {/* First Section: Image 1 on the left and Images 2 and 3 on the right */}
        <article className="grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-x-5 ">
          {/* Image 1 spans 2 columns and 2 rows */}
          <figure className="col-span-4 md:col-span-2 ">
            <img
              src={`http://localhost:3001/assets/images/${firstSlice[0].content[2].url}`}
              alt=""
            />
          </figure>

          {/* Images 2 and 3 stacked in one column with text next to each image */}
          <section className="col-span-2 flex md:flex-col md:gap-5 gap-5">
            {/* Image 2 with text */}
            <article className="flex md:flex-row flex-col gap-4 ">
              <figcaption className="flex flex-col w-full order-1 md:-order-1">
                <h3 className="font-semibold">{secondSlice[0].title}</h3>
                <p>{secondSlice[0].content[0].text}</p>
                <p className="mt-auto">
                  <span className="text-[#e89700] font-bold">
                    {firstSlice[0].articleCategory}
                  </span>{" "}
                  | {new Date(firstSlice[0].publishedAt).getMinutes()} minutter
                  siden
                </p>
              </figcaption>
              <figure className="shrink-0">
                <img
                  src={`http://localhost:3001/assets/images/${
                    secondSlice[0]?.content.find(
                      (content) => content.type === "image"
                    )?.url
                  }`}
                  alt="Image 2"
                  className="h-[150px] object-cover"
                />
              </figure>
            </article>

            {/* Image 3 with text */}
            <article className="flex flex-col gap-4 md:flex-row">
              <figcaption className="flex flex-col w-full order-1 md:-order-1">
                <h3 className="font-semibold">{secondSlice[1].title}</h3>
                <p>{secondSlice[1].content[0].text}</p>
                <p className="pt-6">
                  <span className="text-[#e89700] font-bold">
                    {firstSlice[0].articleCategory}
                  </span>{" "}
                  | {new Date(firstSlice[0].publishedAt).getMinutes()} minutter
                  siden
                </p>
              </figcaption>
              <figure className="shrink-0">
                <img
                  src={`http://localhost:3001/assets/images/${
                    secondSlice[1]?.content.find(
                      (content) => content.type === "image"
                    )?.url
                  }`}
                  alt="Image 3"
                  className="h-[150px] object-cover"
                />
              </figure>
            </article>
          </section>
        </article>

        {/* Second Section: Image 4 and Image 5 next to each other */}
        <article className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 ">
          {/* Image 4 */}
          <figure className="relative">
            <img
              src={`http://localhost:3001/assets/images/${thirdSlice[0].content[2].url}`}
              alt={thirdSlice[0].content[2].text}
            />
            <section className="absolute bottom-0 bg-black text-white w-full p-3 md:text-[1rem] text-sm">
              <p className="w-2/3">{thirdSlice[0].content[0].text}</p>
            </section>
          </figure>

          {/* Image 5 */}
          <figure className="relative">
            <img
              src={`http://localhost:3001/assets/images/${thirdSlice[1].content[2].url}`}
              alt={thirdSlice[0].content[2].text}
            />
            <section className="absolute bottom-0 bg-black text-white w-full p-5 md:text-[1rem] text-sm">
              <p className="w-2/3">{thirdSlice[1].content[0].text}</p>
            </section>
          </figure>
        </article>
      </section>
    </section>
  );
};

export default Hero;
