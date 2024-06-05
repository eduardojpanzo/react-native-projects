import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";

import { ThemedText } from "@/components/ThemedText";

type CurrentTemperatureProps = {
  value: string;
  quantity?: string;
};

export function CurrentTemperature({
  value,
  quantity = "°C",
}: CurrentTemperatureProps) {
  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(25, { duration: 150 }),
      withTiming(0, { duration: 150 })
    ),
    4 // Run the animation 4 times
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          alignItems: "flex-end",
          justifyContent: "center",
          flexDirection: "row",
        },
      ]}
    >
      <ThemedText style={styles.value}>{value}</ThemedText>
      <ThemedText style={styles.quantity}>{quantity}</ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  value: {
    lineHeight: 100,
    fontSize: 100,
    fontWeight: "bold",
  },
  quantity: {
    alignSelf: "flex-start",
    fontSize: 24,
  },
});
