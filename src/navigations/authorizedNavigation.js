import { createMaterialTopTabNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';


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
  },
  Search: {
    screen: SearchStackNavigation
  },
  AddPhoto: {
    screen: AddPhototackNavigation
  },
  Love: {
    screen: LoveStackNavigation
  },
  Profile: {
    screen: ProfileStackNavigation
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
    screen: Inbox
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