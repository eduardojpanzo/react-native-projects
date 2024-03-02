import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FoodItem} from './FoodItem';
import {fastFoodData, recommendedData, superSavingDealsData} from '../data';
import {Separator} from './Separator';

export default function FoodList() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Recommended</Text>
        <FlatList
          horizontal={true}
          data={recommendedData}
          renderItem={({item}) => (
            <FoodItem desc={item.desc} name={item.name} imgUrl={item.imgUrl} />
          )}
          ItemSeparatorComponent={Separator}
          keyExtractor={(item, index) => `${item.name} ${index}`}
        />
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Super Saving Deals</Text>
        <FlatList
          horizontal={true}
          data={superSavingDealsData}
          renderItem={({item}) => (
            <FoodItem desc={item.desc} name={item.name} imgUrl={item.imgUrl} />
          )}
          ItemSeparatorComponent={Separator}
          keyExtractor={(item, index) => `${item.name} ${index}`}
        />
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Fast Food</Text>
        <FlatList
          horizontal={true}
          data={fastFoodData}
          renderItem={({item}) => (
            <FoodItem desc={item.desc} name={item.name} imgUrl={item.imgUrl} />
          )}
          ItemSeparatorComponent={Separator}
          keyExtractor={(item, index) => `${item.name} ${index}`}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    gap: 2,
    marginTop: 10,
    alignSelf: 'center',
  },
  box: {
    marginBottom: 20,
  },
  title: {
    fontWeight: '700',
    marginBottom: 10,
    color: '#111',
    fontSize: 24,
  },
});
