import { createSwitchNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';

import UnAuthNavigation from './unauthorizedNavigation';
import AuthNavigation from './authorizedNavigation';

const RouteConfigs = {
  UnAuthNavigation: {
    screen: UnAuthNavigation
  },
  AuthNavigation: {
    screen: AuthNavigation
  }
}

const SwitchNavigatorConfig = {
  // initialRouteName: null
}

export const RootNavigation = createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);
// export default RootNavigation;
export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const App = reduxifyNavigator(RootNavigation, "root");

const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
