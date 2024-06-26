import { Image, StyleSheet, Platform } from "react-native";

import { CurrentTemperature } from "@/components/CurrentTemperature";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListTimesToday } from "@/components/ListTimesToday";
import { useEffect, useState } from "react";
import { WeatherData } from "@/types";
import { convertKelvinToCelsius } from "@/utils/convert";
import { Temperature } from "@/components/Temperature";

export default function HomeScreen() {
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

  const firstData = data?.list[0];
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#151718" }}
      headerImage={
        <Image
          source={{ uri: "https://openweathermap.org/img/wn/02d@4x.png" }}
          style={styles.weatherIcon}
        />
      }
    >
      <ThemedText type="subtitle" style={styles.city}>
        {data?.city.name}
      </ThemedText>
      <CurrentTemperature
        value={`${convertKelvinToCelsius(firstData?.main.temp ?? 296.37)}`}
      />
      <Temperature
        label={"Feels like"}
        value={convertKelvinToCelsius(firstData?.main.feels_like ?? 296.37)}
      />

      <ThemedText type="subtitle" style={styles.weatherName}>
        {firstData?.weather[0].description}
      </ThemedText>

      {/* definir aqui o velocidade do vento */}
      <ThemedView style={styles.sectionResume}>
        <ThemedView style={styles.resumeItem}>
          <ThemedText>
            <MaterialCommunityIcons size={28} name="waves" />
          </ThemedText>
          <ThemedView style={styles.resumetexts}>
            <ThemedText>{firstData?.main.humidity}%</ThemedText>
            <ThemedText>Humidity</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.resumeItem}>
          <ThemedText>
            <MaterialCommunityIcons name="weather-windy" size={28} />
          </ThemedText>
          <ThemedView style={styles.resumetexts}>
            <ThemedText>{firstData?.wind.speed} km/h</ThemedText>
            <ThemedText>wind speed</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ListTimesToday />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  weatherIcon: {
    height: 178,
    width: 290,
    top: 0,
    right: 0,
    position: "absolute",
  },
  city: {
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    marginTop: -25,
    marginBottom: 25,
  },
  feels: {
    display: "flex",
    alignItems: "center",
    fontWeight: "300",
    fontSize: 12,
    textAlign: "center",
    marginTop: -30,
    marginBottom: 30,
  },
  weatherName: {
    textTransform: "capitalize",
    textAlign: "center",
    marginTop: -30,
  },
  sectionResume: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resumeItem: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  resumetexts: {},
  sectionTimes: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timesItem: {},
  timeTemp: {
    flexDirection: "row",
  },
  timeIcon: {},
});
