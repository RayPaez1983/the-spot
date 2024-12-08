/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import CitiesItem from "../commons/CitiesItem";
import { withNavigation } from "react-navigation";

const DetailsScreen = ({ navigation }) => {
  const city = navigation.getParam("city");
  console.log(city);
  return (
    <ImageBackground
      source={require("../../assets/valencia.jpg")}
      style={styles.imageBackground}
      imageStyle={styles.image} // For styling the image itself
    >
      <Text style={styles.title}>{city.city}</Text>
      <CitiesItem item={city} />
      <Text style={styles.title}>{city.music_place.name}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#fff",
  },
  restaurantContainer: {
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default withNavigation(DetailsScreen);
