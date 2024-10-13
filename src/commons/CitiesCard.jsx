import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const CitiesCard = ({ citiesData, handlePress }) => {
  return (
    <View>
      <Text>We found {citiesData.length} Cities</Text>
      <FlatList
        data={citiesData}
        keyExtractor={(item) => item.city}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => handlePress(item)}
              style={styles.cardStyle}>
              <ImageBackground
                source={require('../../assets/valencia.jpg')}
                style={styles.imageBackground}
                imageStyle={styles.image} // For styling the image itself
              >
                <View style={styles.overlay}>
                  <Text style={styles.cityText}>{item.city}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cityText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  restaurantContainer: {
    paddingLeft: 20,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
  },
  imageBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    borderRadius: 8,
    borderColor: '#000',
    borderWidth: 2,
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default CitiesCard;
