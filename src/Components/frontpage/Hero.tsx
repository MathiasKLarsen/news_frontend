import { getArticle } from "@/data/getArticle"

const hero = async () => {
    const articleData = await getArticle();

  return (
    <section>
        hello?
        {articleData.slice(0,4).map((nyhed) => (
            <figure key={nyhed._id}>
                <img src={`http://localhost:3001/assets/images/${nyhed.url}`} alt="" />
            </figure>
        ))}
    </section>
  )
}

export default hero