import React, { Component } from 'react';
import { View, Text } from 'react-native';


import HeaderAddPhoto from '../../components/HeaderAddPhoto';
import styles from './Video.style';

export default class Video extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: () => (<HeaderAddPhoto title="Video" />)
  })

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate('Home')}>
          Video
        </Text>
      </View>
    );
  }
}