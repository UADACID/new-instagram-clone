import React, { Component } from 'react';
import { View , ScrollView } from 'react-native';

import HeaderSearch from '../../components/HeaderSearch';
import SquareCategory from '../../components/SquareCategory';

import styles from './Search.style';

export default class Search extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: () => (<HeaderSearch />)
  })

  componentDidMount(){

  }

  render(){
    const { categories } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              categories.map((item, index) => (
                <SquareCategory key={index} uri={item.uri} name={item.name} />
              ))
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}