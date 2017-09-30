import React from 'react';

import { View, StyleSheet } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
  }
});

export default App;
