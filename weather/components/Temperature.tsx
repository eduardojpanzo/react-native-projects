import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

interface TemperatureProps {
  value: string | number;
  w?: "xl" | "lg" | "md" | "sm" | "xs";
  size?: number;
  label?: string;
  containerStyle?: Object;
  textStyle?: Object;
}
export function Temperature({
  value,
  w,
  size: sz,
  label,
  containerStyle,
  textStyle,
}: TemperatureProps) {
  let size = sz ? sz : 10;

  switch (w) {
    case "xl":
      size = 32;
      break;
    case "lg":
      size = 24;
      break;
    case "md":
      size = 20;
      break;
    case "sm":
      size = 16;
      break;
    case "xs":
      size = 12;
      break;

    default:
      break;
  }
  return (
    <View style={[styles.timeTemp, containerStyle]}>
      {label && (
        <ThemedText style={{ fontSize: size, ...textStyle, marginRight: 5 }}>
          {label}
        </ThemedText>
      )}
      <ThemedText style={{ fontSize: size, ...textStyle }}>{value}</ThemedText>
      <ThemedText
        style={{
          alignSelf: "flex-start",
          fontSize: size / 2,
        }}
      >
        °C
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  timeTemp: {
    flexDirection: "row",
  },
});
