import React from 'react';
import {View, TextInput, Text, StyleSheet, Image} from 'react-native';

import {Colours} from '../constants/styles';

import SearchIcon from '../assets/icons/search_grey.png';

const SearchBar = ({query, onQueryChange, placeholder}) => {
  return (
    <View style={styles.searchBarContainer}>
      <View>
        <Image source={SearchIcon} style={styles.icon} />
      </View>
      <Text> </Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={onQueryChange}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colours.westerngrey,
    borderRadius: 12,
    margin: 8,
    paddingHorizontal: 8,
  },

  icon: {
    width: 20,
    height: 22,
  },

  input: {
    height: 40,
  },
});
