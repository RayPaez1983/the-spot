import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
const ImageDetails = ({ imageSource, title, score }) => {
  return (
    <View style={styles.cardStyle}>
      <Image style={styles.imageStyles} source={imageSource} />
      <View>
        <Text>City: {title}</Text>
        <Text>Score: {score}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyles: {
    width: 100,
    height: 100,
  },
  cardStyle: {
    borderRadius: 8,
    borderColor: '#000', // Color of the border
    borderWidth: 2, // Width of the border
    margin: 10,
    flexDirection: 'row',
  },
});
export default ImageDetails;
