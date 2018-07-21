import React, { Component } from 'react';
import { View , Text } from 'react-native';

import styles from './Search.style';

export default class Search extends Component {

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate('Home')}>
          Search
        </Text>
      </View>
    );
  }
}