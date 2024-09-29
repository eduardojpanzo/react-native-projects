import { WeatherData } from "@/types";
import { useEffect, useState } from "react";

export function useWeatherData() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<WeatherData>();

  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}?q=luanda&appid=${process.env.EXPO_PUBLIC_API_KEY}&cnt=56&lang=pt_br`
      );
      const json: WeatherData = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  const uniqueDates = [
    ...new Set(
      data?.list.map(
        (entry) => new Date(entry.dt * 1000).toISOString().split("T")[0]
      )
    ),
  ];

  const firstDateForEachdate = uniqueDates.map((date) =>
    data?.list.find((entry) => {
      const entryDate = new Date(entry.dt * 1000).toISOString().split("T")[0];
      const entryTime = new Date(entry.dt * 1000).getHours();
      return entryDate === date && entryTime >= 6;
    })
  );

  return {
    data,
    isLoading,
    firstDateForEachdate,
  };
}
