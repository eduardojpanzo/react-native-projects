import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { WeatherDetail } from "@/types";
import { convertKelvinToCelsius } from "@/utils/convert";
import { WeatherIcon } from "./WheatherIcon";
import { getDayOrNightIcon, getTime } from "@/utils/get";
interface Props {
  data: WeatherDetail[] | undefined;
}
export function ListTimesToday({ data }: Props) {
  return (
    <ThemedView style={styles.sectionTimes}>
      <ScrollView horizontal style={styles.scroll}>
        {data?.map((item, i) => (
          <ThemedView key={item.dt} style={styles.timesItem}>
            <ThemedView style={styles.timeTemp}>
              <ThemedText>
                {convertKelvinToCelsius(item?.main.temp ?? 296.37)}
              </ThemedText>
              <ThemedText style={{ verticalAlign: "top", fontSize: 10 }}>
                °C
              </ThemedText>
            </ThemedView>
            <WeatherIcon
              iconName={getDayOrNightIcon(item.weather[0].icon, item.dt_txt)}
            />
            <ThemedText>{getTime(item.dt_txt)}</ThemedText>
          </ThemedView>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  sectionTimes: {
    marginTop: 30,
  },
  scroll: {},
  timesItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    padding: 5,
    minWidth: 60,
  },
  timeTemp: {
    flexDirection: "row",
  },
  timeIcon: {},
});
