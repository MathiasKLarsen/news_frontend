export interface Video {
   _id: string
   title: string
   url: string
   description: string
   duration: number
   thumbnail: string
}

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/video`

export async function getVideo(): Promise<Video[]> {
  try {
    const res = await fetch(apiURL);

    if (!res.ok) {
      throw new Error(`Failed to fetch article: ${res.statusText}`);
    }

    const data = await res.json();

    return data as Video[];
  } catch (error) {
    console.error("Error fetching article:", error);
    throw new Error("Error fetching article");
  }
}