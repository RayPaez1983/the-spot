import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../commons/SearchBar';
import citiesData from '../api/data.json';
import CitiesCard from '../commons/CitiesCard';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const searchApi = (searchTerm) => {
    const filtered = citiesData.cities.filter((city) =>
      city.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const onPressSelectCity = (city) => {
    navigation.navigate('Details', { city });
  };
  const filteringGrouping = () => {
    const filtered = citiesData.cities.map((city) =>
      city.restaurants.sort((a, b) => {
        return a.rating - b.rating;
      })
    );
    console.log(filtered);
  };
  useEffect(() => {
    setFilteredData(citiesData.cities);
  }, [citiesData]);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <CitiesCard
        citiesData={filteredData}
        navigation={navigation}
        handlePress={onPressSelectCity}
      />
    </View>
  );
};

export default SearchScreen;
