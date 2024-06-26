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
  return {
    data,
    isLoading,
  };
}
