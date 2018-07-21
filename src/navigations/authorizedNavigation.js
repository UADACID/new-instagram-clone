import { createMaterialTopTabNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import React from 'react';

import Camera from '../screens/Camera/Camera.container';
import Inbox from '../screens/Inbox/Inbox.container';

import Home from '../screens/Home/Home.container';
import Search from '../screens/Search/Search.container';
import AddPhoto from '../screens/AddPhoto/AddPhoto.screen';
import Love from '../screens/Love/Love.screen';
import Profile from '../screens/Profile/Profile.container';

const HomeStackNavigation = createStackNavigator({ Home });
const SearchStackNavigation = createStackNavigator({ Search });
const AddPhototackNavigation = createStackNavigator({ AddPhoto });
const LoveStackNavigation = createStackNavigator({ Love });
const ProfileStackNavigation = createStackNavigator({ Profile });

const TabDashboard = createBottomTabNavigator({
  Home: {
    screen: HomeStackNavigation,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = focused ? 'ios-home' : 'ios-home-outline';
        return <Icon name={iconName} />;
      },
    })
  },
  Search: {
    screen: SearchStackNavigation,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = focused ? 'ios-search' : 'ios-search-outline';
        return <Icon name={iconName} />;
      },
    })
  },
  AddPhoto: {
    screen: AddPhototackNavigation,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = focused ? 'md-add' : 'ios-add-outline';
        return <Icon name={iconName} />;
      },
    })
  },
  Love: {
    screen: LoveStackNavigation,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = focused ? 'ios-heart' : 'ios-heart-outline';
        return <Icon name={iconName} />;
      },
    })
  },
  Profile: {
    screen: ProfileStackNavigation,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = focused ? 'ios-contact' : 'ios-contact-outline';
        return <Icon name={iconName} />;
      },
    })
  }
},{
  tabBarOptions : {
    showLabel : false
  }
})

const AppNavigation = createMaterialTopTabNavigator({
  Camera: {
    screen: Camera
  },
  TabDashboard: {
    screen: TabDashboard
  },
  Inbox: {
    screen: createStackNavigator({ Inbox })
  }
}, {
  initialRouteName: 'TabDashboard',
  tabBarComponent: null,
  swipeEnabled: (props) => {
    const firstIndex = props.index;
    const firstRoute = props.routes[firstIndex];
    if (firstRoute.routeName === 'TabDashboard') {
      const secoundIndex = firstRoute.index;
      const secoundRoute = firstRoute.routes[secoundIndex];
      if (secoundRoute.routeName === 'Home') {
        return true
      }
      return false;
    }
    return true
  }
});

export default AppNavigation;