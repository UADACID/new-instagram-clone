import React, { Component } from 'react';
import { View , Text, StatusBar, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

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

  componentWillMount() {
    this.didBlurSubscription().remove();
    this.didFocusSubscription().remove();
  }

  onPressBack = () => {
    this.props.navigation.navigate('Home')
  }


  render(){
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#000"
          barStyle="light-content"
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={this.onPressBack}
        >
          <Icon name="md-arrow-forward" style={styles.backIcon} />
        </TouchableOpacity>
        <Text onPress={() => this.props.navigation.navigate('Home')}>
          Camera
        </Text>
        <View style={styles.containerFooter}>
          <TouchableOpacity style={styles.cameraButton} />
        </View>
      </View>
    );
  }
}