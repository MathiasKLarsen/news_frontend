import { Article } from "@/data/getArticle";
import Seneste from "@/Components/frontpage/Seneste";
import Podcast from "@/Components/frontpage/Podcast";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:3001/article/slug/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Kunne ikke hente nyheds siden");
  }

  const article: Article = await res.json();

  return (
    <section className="max-w-[1000px] mx-auto justify-center px-5 md:px-0">
      <article className="pb-10 px-5 md:px-0">
        {/* headline */}
        <h2 className="text-2xl font-medium">{article.title}</h2>
        <small>
          <p>
            <span className="text-[#e89700] font-bold">
              {article.articleCategory}
            </span>{" "}
            | {new Date(article.publishedAt).getMinutes()} minutter siden
          </p>
        </small>

        {/* big img */}
        {article.content.slice(2, 3).map((item, index) => (
          <figure key={index}>
            <img
              src={`http://localhost:3001/assets/images/${item.url}`}
              alt={item.text}
              className="w-full h-auto object-cover rounded-lg"
            />
          </figure>
        ))}

        {/* text */}
        <div className="mt-6">
          {article.content.map((block, blockIndex) =>
            block.contentbody.map((body, bodyIndex) => {
              if (body.type === "paragraph") {
                return (
                  <p
                    key={`${blockIndex}-${bodyIndex}`}
                    className="mb-3 leading-relaxed"
                  >
                    {body.headline && (
                      <strong className="block mb-1">{body.headline}</strong>
                    )}
                    {body.text}
                  </p>
                );
              }
              return null;
            })
          )}
        </div>
      </article>
      
      <article className="space-y-10">
        <Seneste />
        <Podcast />
      </article>
    </section>
  );
};

export default page;
