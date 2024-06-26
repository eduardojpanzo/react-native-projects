import React from "react";
import { Image, StyleSheet, View } from "react-native";

export function WeatherIcon(props: { iconName: string }) {
  return (
    <View {...props} style={styles.constainer}>
      <Image
        width={100}
        height={100}
        style={styles.image}
        alt="weather-icon"
        src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    position: "relative",
    width: 30,
    height: 30,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
