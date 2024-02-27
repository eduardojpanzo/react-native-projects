import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  imgUrl?: ImageSourcePropType;
  name: string;
  desc: string;
  color?: string;
};
export function FoodItem({desc, name, imgUrl, color}: Props) {
  const bgColor = {backgroundColor: color ? color : '#ddffff'};
  return (
    <View style={[styles.container, bgColor]}>
      <View style={styles.imgBox}>
        <Image style={styles.img} source={imgUrl} resizeMode="center" />
      </View>

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 260,
    padding: 20,
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgBox: {
    width: '80%',
    height: '60%',
    alignItems: 'center',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  name: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    color: '#111',
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#111',
  },
});
