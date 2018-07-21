import React, { Component } from 'react';
import { View , Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'native-base';

const { width } = Dimensions.get('window');

export default class FeedItem extends Component {

  render(){
    const { title, uri, location, photo } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.headerLeftItem}>
            <Image style={styles.logo} source={{ uri: photo }}/>
            <View>
              <Text style={styles.title}>
                {title}
              </Text>
              <Text>
                {location}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonMore}>
            <Icon name="md-more" style={{color: 'gray'}}/>   
          </TouchableOpacity>
        </View>
        <Image style={styles.containerBody} source={{ uri }}/>
        <View style={styles.containerFooter}>
          <View style={styles.footerLeftItem}>
            <TouchableOpacity style={styles.defaultIcon}>
              <Icon name="ios-heart-outline" style={{color: '#000'}}/>   
            </TouchableOpacity>
            <TouchableOpacity style={styles.defaultIcon}>
              <Icon name="ios-chatbubbles-outline" style={{color: '#000'}}/>   
            </TouchableOpacity>
            <TouchableOpacity style={styles.defaultIcon}>
              <Icon name="ios-paper-plane-outline" style={{color: '#000'}}/>   
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonMore}>
            <Icon name="ios-bookmark-outline" style={{color: '#000', fontSize: 30}}/>   
          </TouchableOpacity>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.textLike}>1.290 tayangan</Text>
          <Text style={styles.textTitleBottom}>Pilot Gundam</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum condimentum quam, nec efficitur mauris iaculis id. Vivamus velit purus, ornare vitae quam et, accumsan maximus sem. In ultrices nunc quis mauris lacinia, at tincidunt sapien mollis. Sed eget porta risus, vel varius nibh. Nunc porta, enim sed fringilla mattis,</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  containerHeader: {
    height: 60,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    height: 40,
    width: 40,
    backgroundColor: 'gray',
    borderRadius: 20,
    marginHorizontal: 14
  },
  title: {
    fontWeight: 'bold',
    color: '#000'
  },
  headerLeftItem: {
    flexDirection: 'row'
  },
  buttonMore: {
    padding: 15,
    paddingRight: 25
  },
  containerBody: {
    height: 250,
    width,
    backgroundColor: '#999'
  },
  containerFooter: {
    height: 60,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerLeftItem: {
    flexDirection: 'row',
    paddingLeft: 9
  },
  defaultIcon: {
    marginHorizontal: 9
  },
  containerDescription: {
    margin: 16,
    marginTop: 0
  },
  textLike: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 7
  },
  textTitleBottom: {
    color: '#000',
    fontWeight: 'bold'
  },
  textDescription: {
    color: '#000'
  }
})