import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backGround}>
      <FontAwesome5
        name="search-location"
        size={24}
        color="black"
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Where we go today"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backGround: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
  },
});

export default SearchBar;
