import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home/Home.container';

const authNavigation = createStackNavigator({
  Home: {
    screen: Home
  }
}, {});

export default authNavigation;