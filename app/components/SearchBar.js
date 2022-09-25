import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import COLORS from '../misc/COLORS';

const SearchBar = ({containerStyle}) => {
  return (
    <View style={[styles.container, {...containerStyle}]}>
      <TextInput style={styles.searchBar} placeholder={'Search here...'} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 0.8,
    marginHorizontal: 5,
    paddingLeft: 20,
    height: 40,
    borderRadius: 40,
    fontSize: 18,
  },
});

export default SearchBar;
