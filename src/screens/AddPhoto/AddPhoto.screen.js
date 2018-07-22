import React, { Component } from 'react';
import { View , Text } from 'react-native';

import HeaderAddPhoto from '../../components/HeaderAddPhoto';
import styles from './AddPhoto.style';

export default class AddPhoto extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: () => (<HeaderAddPhoto />)
  })

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