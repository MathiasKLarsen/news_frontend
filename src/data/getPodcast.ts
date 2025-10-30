export type Podcast = {
  _id: string
  headline: string
  info: string
  length: number
  podcast: string
  thumbnail: File | null
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

export async function createPodcast(data: FormData): Promise<Podcast[]> {
  const res = await fetch(`${apiURL}/add`, {
    method: "POST",
    body: data,
  });

  if (!res.ok) throw new Error("Failed to create Podcast");
  return res.json();
}

export async function updatePodcast(id: string, data: FormData): Promise<Podcast[]> {
  const res = await fetch(`${apiURL}/update/${id}`, {
    method: "PUT",
    body: data,
  });

  if (!res.ok) throw new Error("Failed to update Podcast");
  return res.json();
}

export async function deletePodcast(id: string) {
  const res = await fetch(`${apiURL}/delete/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete Podcast");
  return true;
}