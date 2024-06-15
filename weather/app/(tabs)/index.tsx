import { Image, StyleSheet, Platform } from "react-native";

import { CurrentTemperature } from "@/components/CurrentTemperature";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListTimesToday } from "@/components/ListTimesToday";

export default function HomeScreen() {
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
      <CurrentTemperature value="0" />
      <ThemedText type="subtitle" style={styles.weatherName}>
        Broken Clouds
      </ThemedText>

      {/* definir aqui o velocidade do vento */}
      <ThemedView style={styles.sectionResume}>
        <ThemedView style={styles.resumeItem}>
          <ThemedText>
            <MaterialCommunityIcons size={28} name="waves" />
          </ThemedText>
          <ThemedView style={styles.resumetexts}>
            <ThemedText>88%</ThemedText>
            <ThemedText>Humidity</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.resumeItem}>
          <ThemedText>
            <MaterialCommunityIcons name="weather-windy" size={28} />
          </ThemedText>
          <ThemedView style={styles.resumetexts}>
            <ThemedText>0km/h</ThemedText>
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
  weatherName: {
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
