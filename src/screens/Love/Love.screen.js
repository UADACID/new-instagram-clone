import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Love.style';

export default class Love extends Component {

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate('Home')}>
          Love
        </Text>
      </View>
    );
  }
}