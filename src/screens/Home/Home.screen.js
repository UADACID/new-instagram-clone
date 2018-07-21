import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './Home.style';
import HeaderHome from '../../components/HeaderHome';

export default class Home extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: () => (<HeaderHome />)
  })

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#999"
          barStyle="light-content"
        />
        <Text style={{ fontFamily: 'Billabong', fontSize: 50, color: '#000' }} onPress={() => this.props.navigation.navigate('Camera')}>
          Instagarm
        </Text>
      </View>
    );
  }
}