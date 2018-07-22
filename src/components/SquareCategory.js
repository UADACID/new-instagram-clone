import React, { Component } from 'react';
import { View , Text, StyleSheet, Image } from 'react-native';

export default class SquareCategory extends Component {

  render(){
    const { uri, name } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri }}/>
        <View style={styles.footer}>
          <Text style={styles.text}>{name}</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 10,
    // // borderBottomWidth: 0.5,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  image: {
    width: 120,
    height: 95,
    borderRadius: 10
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 120,
    height: 35
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18
  }
})