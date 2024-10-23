// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import citiesData from "../api/data.json";

const useResults = () => {
  const [filteredData, setFilteredData] = useState([]);

  const searchApi = (searchTerm) => {
    const filtered = citiesData.cities.filter((city) =>
      city.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
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
  return [searchApi, filteredData, filteringGrouping];
};
export default useResults;
