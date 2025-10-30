import { openWeather } from "@/data/openWeather";
import { Sun, Cloud, CloudRain } from "lucide-react";

const WeatherCard = async () => {
  const weatherData = await openWeather();

  const getIcon = (main: string, size: number) => {
    if (main.includes("Rain")) return <CloudRain size={size} />;
    if (main.includes("Cloud")) return <Cloud size={size} />;
    return <Sun size={size} />;
  };

  return (
    <section className="grid md:grid-cols-3 gap-x-5 text-white">
      {/* Venstre del */}
      <div className="grid md:col-span-2 grid-rows-[1fr_auto_auto] gap-y-5">
        <div className="p-6 grid grid-cols-2 bg-[#00bae8]">
          {/* overskrift */}
          <div className="flex justify-between">
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

          {/* icon */}
          <div className="flex justify-center items-center">
            {getIcon(weatherData.list[0].weather[0].main, 120)}
          </div>

          {/* grader */}
          <div className="flex justify-center items-center">
            <div>
              <h3 className="text-8xl font-bold leading-none">
                {Math.round(weatherData.list[0].main.temp)}°
              </h3>
              <p className="capitalize text-lg">
                {weatherData.list[0].weather[0].description}
              </p>
            </div>
          </div>

          {/* samlet temp */}
          <div className="flex justify-between items-end text-sm mt-6">
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
        <section className="grid grid-cols-2 gap-5 text-sm">
          <div className="bg-[#00bae8] p-4 flex flex-col gap-y-4 justify-between">
            <p className="text-sm">Vind</p>
            <div className="flex justify-between items-end">
              <p className="text-xs">m/s</p>
              <p className="text-2xl font-bold">
                {weatherData.list[0].wind.speed}
              </p>
            </div>
          </div>

          <div className="bg-[#00bae8] p-4 flex flex-col gap-y-4 justify-between">
            <p className="text-sm">Chance for regn</p>
            <div className="flex justify-between items-end">
              <p className="text-xs">%</p>
              <p className="text-2xl font-bold">
                {weatherData.list[0]?.pop
                  ? Math.round(weatherData.list[0].pop * 100)
                  : 0}
              </p>
            </div>
          </div>
        </section>

        {/* Luftfugtighed + UV (fake UV pga) */}
        <section className="grid grid-cols-2 gap-5 text-sm">
          {/* First block */}
          <div className="bg-[#00bae8] p-4 flex flex-col gap-y-4 justify-between">
            <p className="text-sm">Luftfugtighed</p>
            <div className="flex justify-between items-end">
              <p className="text-xs">%</p>
              <p className="text-2xl font-bold">
                {weatherData.list[0].main.humidity}
              </p>
            </div>
          </div>

          {/* Second Block */}
          <div className="bg-[#00bae8] p-4 flex flex-col gap-y-4 justify-between">
            <p className="text-sm">UV Indeks</p>
            <div className="flex justify-end items-end">
              <p className="text-2xl font-bold">0.5</p>
            </div>
          </div>
        </section>
      </div>

      {/* Prognose */}
      <div className="flex flex-col justify-evenly bg-[#00bae8] p-4">
        {weatherData.list
          .filter((x, i) => i % 8 == 0)
          .map((d: any, i: number) => (
            <div
              key={i}
              className="flex justify-between items-center py-1 text-sm"
            >
              <div>
                <p className="font-semibold">
                  {i === 0
                    ? "I dag"
                    : new Date(d.dt * 1000).toLocaleDateString("da-DK", {
                        weekday: "long",
                      })}
                </p>
                <p className="text-xs opacity-80 text-[#0078A0]">
                  {new Date(d.dt * 1000).toLocaleDateString("da-DK", {
                    day: "numeric",
                    month: "short",
                  })}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-lg font-bold">{Math.round(d.main.temp)}°</p>
              </div>

              {getIcon(d.weather[0].main, 30)}

              <div className="flex gap-2 text-sm opacity-90">
                {weatherData.list.slice(0, 4).map((f: any, i) => (
                  <p key={i}>
                    {i === 0
                      ? ""
                      : i === 1
                      ? ""
                      : i === 2
                      ? ""
                      : ""}{" "}
                    <span className="font-bold">
                      {Math.round(f.main.temp)}°
                    </span>
                  </p>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default WeatherCard;
