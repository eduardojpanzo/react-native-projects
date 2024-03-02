import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export function FoodItem({desc, name, imgUrl, color}: FoodProps) {
  const bgColor = {backgroundColor: color ? color : '#ddffff'};
  return (
    <View style={[styles.container, bgColor]}>
      <View style={styles.imgBox}>
        {imgUrl && (
          <Image style={styles.img} source={imgUrl} resizeMode="center" />
        )}
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
    width: 150,
    height: 210,
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
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#111',
  },
  desc: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    color: '#111',
  },
});
