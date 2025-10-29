export type WeatherResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: ListItem[];
  city: City;
}

export type ListItem = {
  dt: number;
  main: MainWeatherData;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain; // Optional, as it may not be present in all items
  sys: SysInfo;
  dt_txt: string;
}

export type MainWeatherData = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level?: number; // Optional
  grnd_level?: number; // Optional
  humidity: number;
  temp_kf?: number; // Optional
}

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export type Clouds = {
  all: number;
}

export type Wind = {
  speed: number;
  deg?: number; // Optional
  gust?: number; // Optional
}

export type Rain = {
   '3h': number; 
}

export type SysInfo = {
   pod:string; 
}

export type City = {
   id:number; 
   name:string; 
   coord:{ 
      lat:number; 
      lon:number; 
   };
   country:string; 
   population:number; 
   timezone:number; 
   sunrise:number; 
   sunset:number; 
}

export async function openWeather(): Promise<WeatherResponse> {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=8500,dk&units=metric&lang=da&appid=${process.env.NEXT_PUBLIC_WEATHERKEY}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch OpenWeather: ${res.statusText}`);
    }
    
    return res.json();

  } catch (error) {
    console.error("Error fetching OpenWeather:", error);
    throw new Error("Error fetching OpenWeather");
  }
}