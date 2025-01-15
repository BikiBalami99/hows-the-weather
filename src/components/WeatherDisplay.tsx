import type { WeatherData } from "../types/WeatherData";

type WeatherDisplayProps = {
  allWeather: WeatherData[];
};

function WeatherDisplay({ allWeather }: WeatherDisplayProps) {
  return (
    <div>
      <h1>Today's weather</h1>
      <ul>
        {allWeather.map((day) => {
          return (
            <>
              <li key={day.time}>{day.time}</li>
              <li key={day.time + day.temperature}>
                {day.temperature} degree C
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default WeatherDisplay;
