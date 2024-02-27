import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Search} from 'lucide-react-native';

import donutImg from '../assets/donut.png';
import {FoodItem} from '../components/FoodItem';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>Hungry?</Text>
        <Text style={styles.title}>Order an Eat</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          maxLength={40}
          keyboardType="default"
          placeholder="Enter text"
          placeholderTextColor={'black'}
          cursorColor={'black'}
        />
        <Search color={'black'} />
      </View>

      <View>
        <FoodItem desc="starting from R$ 400" name="Donut" imgUrl={donutImg} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  textBox: {
    width: '85%',
    alignSelf: 'center',
    paddingTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    lineHeight: 38,
    color: '#000',
    fontWeight: '500',
  },
  inputContainer: {
    width: '85%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: '#171717',
  },
  textInput: {
    flex: 1,
    height: 36,
    fontWeight: '500',
  },
});
