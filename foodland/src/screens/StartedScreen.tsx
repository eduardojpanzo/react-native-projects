import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import imageBg from '../assets/food.jpeg';

type StartedProps = NativeStackScreenProps<RootStackParamList>;

export function StartedScreen({navigation}: StartedProps) {
  return (
    <ImageBackground source={imageBg} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={[styles.text, styles.title]}>Food Land</Text>

          <View>
            <Text style={styles.text}>Hungry?</Text>
            <Text style={styles.text}>Order n Eat</Text>
          </View>
        </View>

        <View>
          <Pressable
            style={styles.start}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.text}>Get Started</Text>
            <View style={styles.iconBox}>
              <Text style={styles.iconText}>»</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    width: '80%',
    maxHeight: 290,
    maxWidth: 290,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#ffffffea',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: '#000',
    fontWeight: '500',
  },
  title: {
    fontSize: 38,
    fontWeight: '900',
    marginBottom: 30,
  },
  start: {
    width: '60%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginTop: 250,
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  iconBox: {
    width: 54,
    height: '98%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#000',
  },
  iconText: {
    fontSize: 28,
    lineHeight: 28,
    textAlign: 'center',
    color: '#fff',
  },
});
