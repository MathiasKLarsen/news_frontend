export type Podcast = {
  _id: string
  headline: string
  info: string
  length: number
  podcast: string
  thumbnail: string
  releaseDate: string
}

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/podcast`

export async function getPodcast(): Promise<Podcast[]> {
  try {
    const res = await fetch(apiURL);

    if (!res.ok) {
      throw new Error(`Failed to fetch article: ${res.statusText}`);
    }

    const data = await res.json();

    return data as Podcast[];
  } catch (error) {
    console.error("Error fetching article:", error);
    throw new Error("Error fetching article");
  }
}
