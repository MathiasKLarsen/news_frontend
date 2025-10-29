import { openWeather } from "@/data/openWeather";
import { Sun, Cloud, CloudRain } from "lucide-react";

const WeatherCard = async () => {
  const weatherData = await openWeather();

  const getIcon = (main: string) => {
    if (main.includes("Rain")) return <CloudRain size={40} />;
    if (main.includes("Cloud")) return <Cloud size={40} />;
    return <Sun size={40} />;
  };

  return (
    <section className="grid md:grid-cols-3 gap-x-5 text-white">
      {/* Venstre del */}
      <div className="md:col-span-2 grid grid-rows-[1fr_auto_auto] gap-y-5">
        <div className="p-6 flex flex-col justify-between cyan">
          <div>
            <h2 className="text-lg font-semibold">{weatherData.city.name}</h2>
            <p className="text-sm opacity-80 mb-4">
              {new Date().toLocaleDateString("da-DK", {
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-8xl font-bold leading-none">
                {Math.round(weatherData.list[0].main.temp)}°
              </h1>
              <p className="capitalize text-lg">
                {weatherData.list[0].weather[0].description}
              </p>
            </div>
            {getIcon(weatherData.list[0].weather[0].main)}
          </div>

          <div className="flex justify-between text-sm mt-6">
            {weatherData.list.slice(0, 4).map((f: any, i) => (
              <p key={i}>
                {i === 0
                  ? "Dag"
                  : i === 1
                  ? "Middag"
                  : i === 2
                  ? "Aften"
                  : "Nat"}{" "}
                <span className="font-bold">{Math.round(f.main.temp)}°</span>
              </p>
            ))}
          </div>
        </div>

        {/* Vind + regn */}
        <div className="grid grid-cols-2 gap-5 text-center text-sm">
          <div className="cyan p-4">
            <p>Vind</p>
            <p className="text-2xl font-bold">
              {weatherData.list[0].wind.speed}
            </p>
            <p className="text-xs">m/s</p>
          </div>
          <div className="cyan p-4">
            <p>Chance for regn</p>
            <p className="text-2xl font-bold">
              {weatherData.list[0]?.pop
                ? Math.round(weatherData.list[0].pop * 100)
                : 0}
              %
            </p>
          </div>
        </div>

        {/* Luftfugtighed + UV (fake UV pga) */}
        <div className="grid grid-cols-2 gap-5 text-center text-sm">
          <div className="cyan p-4">
            <p>Luftfugtighed</p>
            <p className="text-2xl font-bold">
              {weatherData.list[0].main.humidity}
            </p>
            <p className="text-xs">%</p>
          </div>
          <div className="cyan p-4">
            <p>UV Indeks</p>
            <p className="text-2xl font-bold">0.5</p>
          </div>
        </div>
      </div>

      {/* Prognose */}
      <div className="flex flex-col justify-evenly cyan p-4">
        {weatherData.list.filter((x, i) => i %8 == 0).map((d: any, i: number) => (
          <div
            key={i}
            className="flex justify-between items-center border-b py-1 text-sm"
          >
            <div>
              <p className="font-semibold">
                {i === 0
                  ? "I dag"
                  : new Date(d.dt * 1000).toLocaleDateString("da-DK", {
                      weekday: "long",
                    })}
              </p>
              <p className="text-xs opacity-80">
                {new Date(d.dt * 1000).toLocaleDateString("da-DK", {
                  day: "numeric",
                  month: "long",
                })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold">{Math.round(d.main.temp)}°</p>
              {getIcon(d.weather[0].main)}
            </div>
            <div className="flex gap-2 text-sm opacity-90">
              <p>{Math.round(d.main.temp_min)}°</p>
              <p>{Math.round(d.main.temp_max)}°</p>
              <p>{Math.round(d.main.feels_like)}°</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeatherCard;
