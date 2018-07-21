import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login/Login.screen.container';
import Register from '../screens/Register/Register.screen.container';

const UnAuthNavigation = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
}, {});

export default UnAuthNavigation;