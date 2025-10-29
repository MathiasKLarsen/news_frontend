export type Article = {
  _id: string;
  title: string;
  content: Content[];
  publishedAt: number;
  section: string;
  slug: string;
  articleCategory: string;
  isLandingpage: boolean;
  tags: string[];
  author: string;
  date: string;
}

export type Content = {
  _id: string;
  type: string;
  text?: string;
  url?: string;
  altText?: string;
  caption?: string;
  thumbnail?: string;
  contentbody: ContentBody[];
}

export type ContentBody = {
  type: string;
  text?: string;
  headline?: string; 
}

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/article`

export async function getArticle(): Promise<Article[]> {
  try {
    const res = await fetch(apiURL);

    if (!res.ok) {
      throw new Error(`Failed to fetch article: ${res.statusText}`);
    }

    const data = await res.json();

    return data as Article[];
  } catch (error) {
    console.error("Error fetching article:", error);
    throw new Error("Error fetching article");
  }
}

export async function getArticleByWeather(): Promise<Article[]> {
  try {
    const res = await fetch(`${apiURL}/section/vejr`);

    if (!res.ok) {
      throw new Error(`Failed to fetch article: ${res.statusText}`);
    }

    const data = await res.json();

    return data as Article[];
  } catch (error) {
    console.error("Error fetching article:", error);
    throw new Error("Error fetching article");
  }
}
