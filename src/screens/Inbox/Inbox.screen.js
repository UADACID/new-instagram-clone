import React, { Component } from 'react';
import { View, Text } from 'react-native';


import HeaderInbox from '../../components/HeaderInbox';
import styles from './Inbox.style';

export default class Inbox extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: () => (<HeaderInbox />)
  })

  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate('Home')}>
          Inbox
        </Text>
      </View>
    );
  }
}