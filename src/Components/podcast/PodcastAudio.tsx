import { Podcast } from "@/data/getPodcast";

interface GetPodcastProps {
  podcast: Podcast;
}

const PodcastAudio: React.FC<GetPodcastProps> = ({ podcast }) => {
  const audioURL = `http://localhost:3001/assets/podcast/${podcast.podcast}`;

  return (
    <article key={podcast._id}>
      <audio controls className="w-full self-center">
        <source src={audioURL} type="audio/mpeg" />
      </audio>
    </article>
  );
};

export default PodcastAudio;
