import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { CurrentTemperature } from "@/components/CurrentTemperature";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListTimesToday } from "@/components/ListTimesToday";
import { convertKelvinToCelsius, convertWindSpeed } from "@/utils/convert";
import { Temperature } from "@/components/Temperature";
import { useWeatherData } from "@/hooks/useWeatherData";
import { getDayOrNightIcon } from "@/utils/get";

export default function HomeScreen() {
  const { data, isLoading } = useWeatherData();

  const firstData = data?.list[0];
  const iconName = getDayOrNightIcon(
    firstData?.weather[0].icon ?? "02d",
    firstData?.dt_txt ?? "2024-09-29 21:00:00"
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1a1a1a" }}
      headerImage={
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${iconName}@4x.png`,
          }}
          style={styles.weatherIcon}
        />
      }
    >
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"#ddd"} />
      ) : (
        <View>
          <ThemedText type="subtitle" style={styles.city}>
            {data?.city.name}
          </ThemedText>
          <CurrentTemperature
            value={`${convertKelvinToCelsius(firstData?.main.temp ?? 296.37)}`}
          />
          <Temperature
            //slabel={"Feels like"}
            label={"parece"}
            containerStyle={{
              justifyContent: "center",
              marginTop: -20,
              marginBottom: 20,
            }}
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
                <ThemedText>Umidade</ThemedText>
              </ThemedView>
            </ThemedView>

            <ThemedView style={styles.resumeItem}>
              <ThemedText>
                <MaterialCommunityIcons name="weather-windy" size={28} />
              </ThemedText>
              <ThemedView style={styles.resumetexts}>
                <ThemedText>
                  {convertWindSpeed(firstData?.wind.speed ?? 1.64)}
                </ThemedText>
                <ThemedText>velocidade do vento</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>

          <ListTimesToday data={data?.list.slice(0, 9)} />
        </View>
      )}
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
    marginBottom: 10,
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
    marginTop: 20,
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
