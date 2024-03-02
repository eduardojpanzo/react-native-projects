import {StyleSheet, View} from 'react-native';

export function Separator() {
  return <View style={styles.seprator}></View>;
}

const styles = StyleSheet.create({
  seprator: {
    width: 10,
  },
});
