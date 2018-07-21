import React, { Component } from 'react';
import { View , Text, StatusBar } from 'react-native';

import styles from './Camera.style';

export default class Camera extends Component {

  componentDidMount(){
    this.didFocusSubscription();
    this.didBlurSubscription();
  }

  didFocusSubscription = () => this.props.navigation.addListener(
    'didFocus',
    payload => {
      console.log('didFocus', payload);
      StatusBar.setBackgroundColor('#000', true)
    }
  );

  didBlurSubscription = () => this.props.navigation.addListener(
    'didBlur',
    payload => {
      console.log('didBlur', payload);
      StatusBar.setBackgroundColor('#999', true)
    }
  );

  // componentWillMount() {
  //   this.didBlurSubscription.remove();
  //   this.didFocusSubscription.remove();
  // }


  render(){
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#000"
          barStyle="light-content"
        />
        <Text onPress={() => this.props.navigation.navigate('Home')}>
          Camera
        </Text>
      </View>
    );
  }
}