import React from 'react';
import { StyleSheet , View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

import tvIcon from '../assets/images/television.png';

const { width, height } = Dimensions.get('window');

const HeaderInbox = ({ navigation }) => {

  onPressBack = () => () => {
    navigation.navigate('Home');
  };

  onPressAdd = () => () => {
    alert('not yet');
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftItem}>
        <TouchableOpacity onPress={onPressBack()}>
          <Icon name="md-arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Direct</Text>
      </View>
      <View style={styles.rightItem}>
        <TouchableOpacity onPress={onPressAdd()}>
          <Icon name="md-add" style={styles.add} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(HeaderInbox);

const styles = StyleSheet.create({
  container: {
    width,
    height: 60,
    backgroundColor: '#fafafa',
    borderBottomWidth: 1,
    borderColor: '#b4b6b7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backIcon: {
    fontSize: 35,
    paddingHorizontal: 16
  },
  add: {
    fontSize: 30,
    paddingHorizontal: 16
  },
  tv: {
    height: 25,
    width: 25
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginLeft: 20
  }
});
