import { getArticle } from "@/data/getArticle";
import { FaArrowRight } from "react-icons/fa";

const Seneste = async () => {
  const articleData = await getArticle();

  return (
    <section className="max-w-[1000px] mx-auto justify-center px-5 md:px-0">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold mb-10">Seneste</h2>
        <button className="text-yellow-500 hover:text-yellow-600 flex items-center gap-1 font-medium text-xl">
          Vis mere
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {articleData.slice(5, 9).map((item, index) => (
          <div key={index} className="flex flex-col">
            <figure>
              <img
                src={`http://localhost:3001/assets/images/${item.content[2].url}`}
                alt={item.content[2].text}
                className="w-full h-auto object-cover rounded-lg"
              />
            </figure>
            <figcaption className="flex flex-col p-4">
              <p className="text-sm line-clamp-2">{item.content[0].text}</p>
              <p className="text-xs mt-2">
                <span className="text-[#e89700] font-bold">
                  {item.articleCategory}
                </span>{" "}
                |{new Date(item.publishedAt).getMinutes()} minutter siden
              </p>
            </figcaption>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Seneste;
