import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import ajax from '../ajax';
import DealList from './DealList';

class App extends React.Component {
  state = {
    deals: [],
  };
  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState(prevState => {
      return { deals };
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.deals.length > 0 ? (
          <DealList deals={this.state.deals} />
        ) : (
          <Text style={styles.header}>Bakesale</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;
