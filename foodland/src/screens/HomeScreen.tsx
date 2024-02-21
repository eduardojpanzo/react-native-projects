import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export function HomeScreen() {
  return (
    <View>
      <View style={styles.textBox}>
        <Text style={styles.title}>Hungry?</Text>
        <Text style={styles.title}>Order an Eat</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          maxLength={40}
          keyboardType="default"
          placeholder="Enter amount in Rupees"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  textBox: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    lineHeight: 32,
    color: '#000',
    fontWeight: '500',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    height: 36,
    marginHorizontal: 'auto',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 10,
    fontWeight: '500',
    color: '#000',
  },
});
