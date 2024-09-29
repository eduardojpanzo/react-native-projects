import { StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { TextInput } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";

export function LocationSearch() {
  const color = useThemeColor({}, "text");

  const [text, onChangeText] = React.useState("Luanda");
  return (
    <ThemedView style={styles.container}>
      <Ionicons
        name="location"
        style={styles.locationBtn}
        onPress={() => console.log("localização atual")}
        color={color}
        size={30}
      />

      <TextInput
        style={[{ color, borderColor: color }, styles.input]}
        onChangeText={onChangeText}
        placeholder="Cidade"
        value={text}
      />

      <Ionicons
        name="search-circle-sharp"
        style={styles.searchBtn}
        onPress={() => console.log("pesquisar")}
        color={color}
        size={32}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 20,
    paddingBottom: 0,
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  locationBtn: { padding: 0, margin: 0 },
  searchBtn: { padding: 0, margin: 0 },
});
