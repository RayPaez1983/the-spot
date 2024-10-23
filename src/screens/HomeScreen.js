/* eslint-disable react/prop-types */
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const SearchScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>SearchScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to The Best City's"
      />
      <TouchableOpacity onPress={() => navigation.navigate("LatinPlaces")}>
        <Text>Go to LatinPlaces</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("ColorDemo")}
        title="Go to Colors"
      />
      <Button
        onPress={() => navigation.navigate("SquareComponent")}
        title="Go to SquareComponent"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to TextScreen"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Box")}>
        <Text>Go to Box Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SearchScreen;
