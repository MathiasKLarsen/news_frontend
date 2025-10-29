import WeatherHero from "@/Components/vejr/WeatherHero";
import WeatherCard from "@/Components/vejr/WeatherCard";
import WeatherVideo from "@/Components/vejr/WeatherVideo";

const Vejr = () => {

  return (
    <section className="max-w-[1000px] space-y-5 mx-auto justify-center px-5 md:px-0">
      <WeatherHero />
      <WeatherCard />
      <WeatherVideo />
    </section>
  );
};

export default Vejr;
