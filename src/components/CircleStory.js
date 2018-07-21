import React, { Component } from 'react';
import { View , Text, StyleSheet, Image } from 'react-native';

export default class CircleStory extends Component {

  render(){
    const { uri, name } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri }}/>
        <Text style={styles.title}>name</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#e0e0e0'
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 40,
    margin: 10
  },
  title: {
    alignSelf: 'center'
  }
})