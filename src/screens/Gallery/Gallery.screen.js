import React, { Component } from 'react';
import { View, Text } from 'react-native';


import HeaderAddPhoto from '../../components/HeaderAddPhoto';
import styles from './Gallery.style';

export default class Gallery extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate('Home')}>
          Gallery
        </Text>
      </View>
    );
  }
}