import React from 'react';

import { TextInput, StyleSheet } from 'react-native';

class SearchBar extends React.Component {
  render() {
    return <TextInput placeholder="Search All Deals" style={styles.input} />;
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 12,
  },
});

export default SearchBar;
