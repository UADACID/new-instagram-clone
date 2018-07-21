import React, { Component } from 'react';
import { View , Text } from 'react-native';

import styles from './AddPhoto.style';

export default class AddPhoto extends Component {

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate('Home')}>
          AddPhoto
        </Text>
      </View>
    );
  }
}