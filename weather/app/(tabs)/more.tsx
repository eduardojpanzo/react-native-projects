import { StyleSheet, Image, View, Text } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { CurrentTemperature } from "@/components/CurrentTemperature";
import { ThemedText } from "@/components/ThemedText";
import { Temperature } from "@/components/Temperature";
import { useWeatherData } from "@/hooks/useWeatherData";
import { convertKelvinToCelsius, dateToWeekDay } from "@/utils/convert";

export default function TabTwoScreen() {
  const { firstDateForEachdate, firstData } = useWeatherData();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <ThemedView>
          <Image
            style={styles.headerImage}
            source={require("@/assets/images/adaptive-icon.png")}
          />
          <ThemedView style={styles.headerResume}>
            <CurrentTemperature
              value={convertKelvinToCelsius(
                firstData?.main.temp ?? 0
              ).toString()}
            />
            <ThemedText type="subtitle" style={styles.weatherName}>
              {firstData?.weather[0].description}
            </ThemedText>
          </ThemedView>
        </ThemedView>
      }
    >
      <ThemedView style={styles.weeklyList}>
        {firstDateForEachdate?.map((item, i) => (
          <View key={i} style={styles.weekItem}>
            <ThemedText style={styles.weekItemDay}>
              {dateToWeekDay(item?.dt_txt).slice(0, 3)}
            </ThemedText>
            <ThemedText style={styles.weekItemWeather}>
              {item?.weather[0].description}
            </ThemedText>
            <View>
              <Temperature
                value={convertKelvinToCelsius(item?.main.temp ?? 0)}
                w="lg"
              />
              <View style={styles.weekItemTempFeels}>
                <ThemedText style={{ fontSize: 12 }}>parece </ThemedText>
                <Temperature
                  value={convertKelvinToCelsius(item?.main.feels_like ?? 0)}
                  w="sm"
                />
              </View>
            </View>
          </View>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}
// {Math.floor(Math.random() * 20) - 1}
const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  headerResume: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#000a",
    alignItems: "center",
    justifyContent: "center",
  },
  weatherName: {
    fontWeight: "400",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  weeklyList: {
    gap: 10,
  },
  weekItem: {
    backgroundColor: "#1c1c1b",
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  weekItemDay: {
    fontWeight: "800",
    fontSize: 30,
    lineHeight: 32,
  },
  weekItemWeather: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  weekItemTemp: {
    fontSize: 40,
  },
  weekItemTempFeels: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
