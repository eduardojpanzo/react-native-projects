// https://api.openweathermap.org/data/2.5/forecast?q=luanda&appid=1cf46c27881acf57163784133219bf77&cnt=56&lang=pt_br

//https://openweathermap.org/img/wn/02d@4x.png

import { Image, StyleSheet, Platform } from "react-native";

import { CurrentTemperature } from "@/components/CurrentTemperature";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1d3140" }}
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

      <ThemedView>{/* definir aqui o velocidade do vento */}</ThemedView>

      {/* listagem do tempo de hoje em horas do dia */}

      {/* modificar os tab: Home -> today explore-> 3 or 7 day resume */}
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
  resume: {},
});
