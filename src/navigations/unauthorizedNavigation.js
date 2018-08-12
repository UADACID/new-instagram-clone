import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login/Login.container';
import Register from '../screens/Register/Register.container';

const UnAuthNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  }
}, {
  // initialRouteName: 'Register'
});

export default UnAuthNavigation;