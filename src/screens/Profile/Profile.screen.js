import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Profile.style';

export default class Profile extends Component {

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate('Home')}>
          Profile
        </Text>
      </View>
    );
  }
}