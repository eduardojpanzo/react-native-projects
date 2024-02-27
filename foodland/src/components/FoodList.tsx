import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
type Props = {
  title: string;
};

export default function FoodList({title}: Props) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 2,
  },
});
