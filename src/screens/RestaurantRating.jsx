import React from "react";
import { View, Text, StyleSheet } from "react-native";

// eslint-disable-next-line react/prop-types
const RestaurantRating = ({ title, results }) => {
  console.log(results);
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RestaurantRating;
