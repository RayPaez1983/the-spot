import React, { useState } from "react";
import { View } from "react-native";
import SearchBar from "../commons/SearchBar";
import CitiesCard from "../commons/CitiesCard";
import useResults from "../hooks/useResults";

// eslint-disable-next-line react/prop-types
const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const onPressSelectCity = (city) => {
    // eslint-disable-next-line react/prop-types
    navigation.navigate("Details", { city });
  };
  const [searchApi, filteredData] = useResults();

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
