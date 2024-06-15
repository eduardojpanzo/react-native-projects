import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function ListTimesToday() {
  return (
    <ThemedView style={styles.sectionTimes}>
      <ScrollView horizontal style={styles.scroll}>
        {Array.from({ length: 7 }).map((_, i) => (
          <ThemedView key={i} style={styles.timesItem}>
            <ThemedView style={styles.timeTemp}>
              <ThemedText>{Math.floor(Math.random() * 20) - 1}</ThemedText>
              <ThemedText style={{ verticalAlign: "top", fontSize: 10 }}>
                °C
              </ThemedText>
            </ThemedView>
            <ThemedText>
              <MaterialCommunityIcons size={32} name="weather-partly-cloudy" />
            </ThemedText>
            <ThemedText>{Math.floor(Math.random() * 12) + 0}:00</ThemedText>
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
