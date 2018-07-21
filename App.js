/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigation from './src/navigations/rootNavigation';
import store from './src/store';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
