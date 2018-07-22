import React from 'react';
import { StyleSheet , View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');

const HeaderSearch = ({ navigation, title }) => {

  onPressSearch = () => () => {
    alert('not yet');
  };

  onPressAdd = () => () => {
    alert('not yet');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressSearch()} style={styles.leftItem}>
        <Icon name="ios-search-outline" style={styles.searchIcon} />
        <Text style={styles.title}>Cari</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(HeaderSearch);

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
  searchIcon: {
    fontSize: 30,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 20,
    color: '#999'
  }
});
