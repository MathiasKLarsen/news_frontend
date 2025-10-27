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

const apiURL = "http://localhost:3001/article"

export async function getArticle(): Promise<Content[]> {
    const res = await fetch(`${apiURL}`);
    if (!res.ok) throw new Error("Failed to fetch article");
    return res.json();
}