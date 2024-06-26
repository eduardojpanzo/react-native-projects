import React from "react";
import { Image, StyleSheet } from "react-native";

export function WeatherIcon(props: { iconName: string }) {
  return (
    <div title={props.iconName} {...props} style={styles.constainer}>
      <Image
        width={100}
        height={100}
        style={styles.image}
        alt="weather-icon"
        src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`}
      />
    </div>
  );
}

const styles = StyleSheet.create({
  constainer: {
    position: "relative",
    width: 20,
    height: 20,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
