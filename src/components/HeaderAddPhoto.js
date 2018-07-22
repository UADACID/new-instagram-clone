import React from 'react';
import { StyleSheet , View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';

import tvIcon from '../assets/images/television.png';

const { width, height } = Dimensions.get('window');

const HeaderAddPhoto = ({ navigation }) => {

  onPressBack = () => () => {
    const backAction = NavigationActions.back({
      key: null,
    });
    navigation.dispatch(backAction);
  };

  onPressAdd = () => () => {
    alert('not yet');
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftItem}>
        <TouchableOpacity onPress={onPressBack()}>
          <Icon name="ios-close-outline" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Galery</Text>
      </View>
      <View style={styles.rightItem}>
        <TouchableOpacity onPress={onPressAdd()}>
          <Text style={styles.rightText}>Selanjutnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(HeaderAddPhoto);

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
  rightText: {
    color: '#1e8fec',
    fontSize: 20,
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
