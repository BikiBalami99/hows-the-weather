import type { WeatherData } from "../types/WeatherData";

export async function fetchWeather(latitude: string, longitude: string) {
  try {
    const url = `http://localhost:3000/api/weather/${latitude}/${longitude}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error fetching weather data in server action: ${response.statusText}`
      );
    }
    const data = await response.json();
    const allTimes: string[] = data.hourly.time;
    const allTemperature: number[] = data.hourly.temperature_2m;
    const weather: WeatherData[] = [];

    allTimes.forEach((time, index) => {
      weather.push({ time, temperature: allTemperature[index] });
    });

    return weather;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch weather data.");
  }
}
