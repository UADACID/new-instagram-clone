import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login/Login.container';
import Register from '../screens/Register/Register.container';

const UnAuthNavigation = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
}, {});

export default UnAuthNavigation;