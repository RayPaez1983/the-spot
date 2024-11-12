/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const CitiesList = ({ citiesData, handlePress, customTitleText }) => {
  return (
    <View style={styles.CityListContainer}>
      {customTitleText ? (
        <Text>{customTitleText}</Text>
      ) : (
        <Text>We found {citiesData.length} Cities</Text>
      )}
      <FlatList
        data={citiesData}
        keyExtractor={(item) => item.city}
        style={styles.list}
        horizontal={true}
        renderItem={({ item }) => {
          const bestPlaces = item.best_places.filter(
            (rate) => rate.ratingb === maxRating
          );
          const maxRating = Math.max(
            ...bestPlaces.map((place) => place.rating)
          );
          const bestPlacesFilter = item.best_places.find(
            (rate) => rate.rating === maxRating
          );
          console.log(bestPlacesFilter.name);
          return (
            <View>
              <TouchableOpacity
                onPress={() => handlePress(item)}
                style={styles.cardStyle}
              >
                <ImageBackground
                  source={require("../../assets/valencia.jpg")}
                  style={styles.imageBackground}
                  imageStyle={styles.image} // For styling the image itself
                >
                  <View style={styles.overlay}>
                    <Text style={styles.cityText}>{item.city}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <Text>{bestPlacesFilter.name}</Text>
              <Text>{bestPlacesFilter.ratingR}</Text>
              <Text>{bestPlacesFilter.address}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  CityListContainer: {
    marginLeft: 20,
  },

  cityText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  restaurantContainer: {
    paddingLeft: 20,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "600",
  },
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: 250,
  },
});
export default CitiesList;
