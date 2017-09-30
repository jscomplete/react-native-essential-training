/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HelloRN extends Component {
  render() {
    console.log('Hello RN!!');
    return (
      <View style={styles.container}>
      <Text style={[styles.welcome, {flex: 5}]}>
        Hello World1...
      </Text>
      <Text style={[styles.welcome, {flex: 4}]}>
        Hello World2...
      </Text>
      <Text style={[styles.welcome, {flex: 1}]}>
        Hello World3...
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 20,
    // textAlign: 'center',
    margin: 10,
    backgroundColor: 'rosybrown',
  },
});

AppRegistry.registerComponent('HelloRN', () => HelloRN);
