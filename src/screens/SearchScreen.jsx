import React, { useState } from "react";
import SearchBar from "../commons/SearchBar";
import CitiesList from "../commons/CitiesList";
import useResults from "../hooks/useResults";
import { ScrollView } from "react-native";
// eslint-disable-next-line react/prop-types
const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const onPressSelectCity = (city) => {
    // eslint-disable-next-line react/prop-types
    navigation.navigate("Details", { city });
  };
  const [searchApi, filteredData] = useResults();

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <CitiesList citiesData={filteredData} handlePress={onPressSelectCity} />
        <CitiesList
          citiesData={filteredData}
          handlePress={onPressSelectCity}
          customTitleText="Summer Cities"
        />
        <CitiesList
          citiesData={filteredData}
          handlePress={onPressSelectCity}
          customTitleText="Winter Cities"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
