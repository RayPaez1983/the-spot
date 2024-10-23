import React, { useState } from 'react';
import SearchBar from '../commons/SearchBar';
import CitiesList from '../commons/CitiesList';
import useResults from '../hooks/useResults';

// eslint-disable-next-line react/prop-types
const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const onPressSelectCity = (city) => {
    // eslint-disable-next-line react/prop-types
    navigation.navigate('Details', { city });
  };
  const [searchApi, filteredData] = useResults();

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <CitiesList
        citiesData={filteredData}
        navigation={navigation}
        handlePress={onPressSelectCity}
      />
      <CitiesList
        citiesData={filteredData}
        navigation={navigation}
        handlePress={onPressSelectCity}
        customTitleText="Raymond"
      />
      <CitiesList
        citiesData={filteredData}
        navigation={navigation}
        handlePress={onPressSelectCity}
        customTitleText="Second"
      />
    </>
  );
};

export default SearchScreen;
