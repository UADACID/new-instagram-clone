import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Home.style';

export default class Home extends Component {

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate('Register')}>
          Home
        </Text>
      </View>
    );
  }
}