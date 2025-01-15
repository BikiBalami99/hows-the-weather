import WeatherDisplay from "@/components/WeatherDisplay";
import styles from "./page.module.css";
import { fetchWeather } from "@/lib/fetchWeather";

export default async function Home() {
  const allWeather = await fetchWeather("35.6762", "139.6503");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form action="">
          <label htmlFor="latitude">Latitude</label>
          <input type="text" name="latitude" id="latitude" />
          <label htmlFor="longitude">Longitude</label>
          <input type="text" name="longitude" id="longitude" />
          <button type="submit">Get weather</button>
        </form>

        <WeatherDisplay allWeather={allWeather} />
      </main>
    </div>
  );
}
