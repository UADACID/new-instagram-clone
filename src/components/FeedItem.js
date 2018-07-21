import React, { Component } from 'react';
import { View , Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'native-base';

const { width } = Dimensions.get('window');

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum condimentum quam, nec efficitur mauris iaculis id. Vivamus velit purus, ornare vitae quam et, accumsan maximus sem. In ultrices nunc quis mauris lacinia, at tincidunt sapien mollis. Sed eget porta risus, vel varius nibh. Nunc porta, enim sed fringilla mattis,';

export default class FeedItem extends Component {

  state = {
    love: false,
    showMore: true
  }

  onPressLove = () => {
    this.setState({
      love: !this.state.love
    })
  }

  onShowMore = () => {
    this.setState({
      showMore: false
    })
  }

  render(){
    const { title, uri, location, photo } = this.props;
    const { love, showMore } = this.state;
    const buttonShowMore = (<Text onPress={this.onShowMore} style={styles.showmore}>show more</Text>);
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.headerLeftItem}>
            <Image style={styles.logo} source={{ uri: photo }}/>
            <View>
              <Text style={styles.title}>
                {title}
              </Text>
              {
                location && location !== '' ?
                  <Text>
                    {location}
                  </Text> : null
              }
            </View>
          </View>
          <TouchableOpacity style={styles.buttonMore}>
            <Icon name="md-more" style={{color: 'gray'}}/>   
          </TouchableOpacity>
        </View>
        <Image style={styles.containerBody} source={{ uri }}/>
        <View style={styles.containerFooter}>
          <View style={styles.footerLeftItem}>
            <TouchableOpacity style={styles.defaultIcon} onPress={this.onPressLove}>
              <Icon name={`ios-heart${love ? '' : '-outline'}`} style={{color: love ? 'red' : '#000'}}/>   
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
          {
            showMore ? 
            <Text>{description.substr(0, 100)}{` ....`}{buttonShowMore}</Text> :
            <Text>{description}</Text>
          }
          
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
  },
  showmore: {
    color: 'gray'
  }
})