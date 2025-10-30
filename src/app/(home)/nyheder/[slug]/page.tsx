import { getArticleByID } from "@/data/getArticle";
import Seneste from "@/Components/frontpage/Seneste";
import Podcast from "@/Components/frontpage/Podcast";

interface PageProps {
  params: Promise<{ slug: string }>
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const article = await getArticleByID(slug); 

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
        {article.content.slice(2, 3).map(( item: any, index: number ) => (
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
          {article.content.map((block: any, blockIndex: any) =>
            block.contentbody.map((body: any, bodyIndex: any) => {
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
