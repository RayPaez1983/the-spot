import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
// eslint-disable-next-line react/prop-types
const ColorCounter = ({ color, onClickDecrease, onClickIncrease }) => {
  return (
    <View style={styles.cardStyle}>
      <Text style={{ backgroundColor: color }}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onClickIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onClickDecrease()} />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 300,
  },
  cardStyle: {
    borderRadius: 8,
    borderColor: "#000", // Color of the border
    borderWidth: 2, // Width of the border
    margin: 10,
  },
});
export default ColorCounter;
