import { createTabNavigator, createMaterialTopTabNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import React from 'react';

import Camera from '../screens/Camera/Camera.container';
import Inbox from '../screens/Inbox/Inbox.container';

import Home from '../screens/Home/Home.container';
import Search from '../screens/Search/Search.container';
import AddPhoto from '../screens/AddPhoto/AddPhoto.screen';
import Love from '../screens/Love/Love.screen';
import Profile from '../screens/Profile/Profile.container';

//TAB ADD PHOTO
import Gallery from '../screens/Gallery/Gallery.container';
import Foto from '../screens/Foto/Foto.container';
import Video from '../screens/Video/Video.container';


const TabAddPhoto = createMaterialTopTabNavigator({
  Gallery: {
    screen: createStackNavigator({ Gallery })
  },
  Foto: {
    screen: createStackNavigator({ Foto })
  },
  Video: {
    screen: createStackNavigator({ Video })
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#999',
    indicatorStyle: {
      backgroundColor: '#000'
    },
    tabStyle: {
      backgroundColor: '#fff'
    },
    style: {
      backgroundColor: '#fff'
    }
  }
})

const HomeStackNavigation = createStackNavigator({ Home });
const SearchStackNavigation = createStackNavigator({ Search, Love1: Love }, { headerMode: 'float' });
const AddPhototackNavigation = TabAddPhoto;
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
      tabBarVisible: false,
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
  },
  initialRouteName: 'Search'
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