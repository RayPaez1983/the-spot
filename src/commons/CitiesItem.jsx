import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const CitiesItem = ({ item }) => {
  console.log(item);
  return (
    <View>
      <Text style={styles.citiesItemTitle}>Places to Visit</Text>
      <FlatList
        data={item.best_places}
        keyExtractor={(place) => place.name}
        renderItem={({ item: place }) => {
          return (
            <View style={styles.citiesItemContainer}>
              <Text style={styles.citiesItemContent}>{place.name}</Text>
              <Text style={styles.citiesItemContent}>
                Address: {place.address}
              </Text>
              <Text style={styles.citiesItemContent}>
                Rating: {place.rating}
              </Text>
            </View>
          );
        }}
      />
      <Text style={styles.citiesItemTitle}>Restaurants to Visit</Text>
      <FlatList
        data={item.restaurants}
        keyExtractor={(restaurant) => restaurant.name}
        renderItem={({ item: restaurant }) => {
          return (
            <View style={styles.citiesItemContainer}>
              <Text style={styles.citiesItemContent}>{restaurant.name}</Text>
              <Text style={styles.citiesItemContent}>
                Cost: {restaurant.cost}
              </Text>
              <Text style={styles.citiesItemContent}>
                Rating: {restaurant.rating}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  citiesItemContent: { color: '#fff' },
  citiesItemContainer: {
    paddingLeft: 20,
  },
  citiesItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default CitiesItem;
