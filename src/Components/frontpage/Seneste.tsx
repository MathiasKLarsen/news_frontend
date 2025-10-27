import { getArticle } from "@/data/getArticle"

const Seneste = async () => {
  const articleData = await getArticle();

  return (
    <section className="max-w-[1000px] mx-auto justify-center">
      <h2 className="text-4xl font-bold mb-5">
        Seneste
      </h2>
      <section className="flex flex-row gap-x-5">
        {articleData.slice(5, 9).map((item, index) => (
          <figure key={index}>
            <img src={`http://localhost:3001/assets/images/${item.content[2].url}`} alt="" />
          </figure>
        ))}
      </section>
    </section>
  )
}

export default Seneste