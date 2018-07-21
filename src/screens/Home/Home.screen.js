import React, { Component } from 'react';
import { View, StatusBar, ScrollView, FlatList } from 'react-native';

import styles from './Home.style';
import HeaderHome from '../../components/HeaderHome';
import CircleStory from '../../components/CircleStory';
import FeedItem from '../../components/FeedItem';

export default class Home extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: () => (<HeaderHome />)
  })

  componentDidMount(){

  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item}) => (
    <FeedItem
      title={item.title}
      uri={item.uri}
      location={item.location}
      photo={item.photo}
    />
  );

  render(){
    const { feeds, stories } = this.props;
    return (
      <ScrollView>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#999"
          barStyle="light-content"
        />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              stories.map((item, index) => (
                <CircleStory key={index} uri={item.uri} name={item.name} />
              ))
            }
          </ScrollView>
        </View>
        <FlatList
          data={feeds}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
      </ScrollView>
    );
  }
}