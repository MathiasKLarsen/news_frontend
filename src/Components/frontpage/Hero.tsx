import { getArticle } from "@/data/getArticle";

const Hero = async () => {
  const articleData = await getArticle();

  // Slices for specific sections of the article
  const firstSlice = articleData.slice(0, 1);
  const secondSlice = articleData.slice(1, 3);
  const thirdSlice = articleData.slice(3, 5);

  return (
    <section className="max-w-[1000px] mx-auto justify-center">
      <h2 className="text-4xl font-bold mb-5">
        Ny grøn energiplan sat i værk
      </h2>
      <section className="flex flex-col gap-y-15">
        {/* First Section: Image 1 on the left and Images 2 and 3 on the right */}
        <article className="grid grid-cols-4 gap-x-5">
          {/* Image 1 spans 2 columns and 2 rows */}
          <figure className="col-span-2 row-span-2">
            <img src={`http://localhost:3001/assets/images/${firstSlice[0].content[2].url}`} alt="" />
          </figure>

          {/* Images 2 and 3 stacked in one column with text next to each image */}
          <section className="col-span-2 flex flex-col gap-5">
            {/* Image 2 with text */}
            <article className="flex flex-row gap-4">
              <figcaption className="flex flex-col w-full">
                <h3 className="font-semibold">img2</h3>
                <p>img2content</p>
              </figcaption>
              <figure className="shrink-0">
                <img
                  src={`http://localhost:3001/assets/images/${secondSlice[0]?.content.find(
                    (content) => content.type === "image"
                  )?.url}`}
                  alt="Image 2"
                  className="h-[150px] object-cover"
                />
              </figure>
            </article>

            {/* Image 3 with text */}
            <article className="flex flex-row gap-4">
              <figcaption className="flex flex-col w-full">
                <h3 className="font-semibold">img3</h3>
                <p>img3content</p>
              </figcaption>
              <figure className="shrink-0">
                <img
                  src={`http://localhost:3001/assets/images/${secondSlice[1]?.content.find(
                    (content) => content.type === "image"
                  )?.url}`}
                  alt="Image 3"
                  className="h-[150px] object-cover"
                />
              </figure>
            </article>
          </section>
        </article>

        {/* Second Section: Image 4 and Image 5 next to each other */}
        <article className="grid grid-cols-2 gap-x-5">
          {/* Image 4 */}
          <figure className="shrink-0">
            <img src={`http://localhost:3001/assets/images/${thirdSlice[0].content[2].url}`} alt="" />
          </figure>

          {/* Image 5 */}
          <figure className="shrink-0">
            <img src={`http://localhost:3001/assets/images/${thirdSlice[1].content[2].url}`} alt="" />
          </figure>
        </article>
      </section>
    </section>
  );
};

export default Hero;