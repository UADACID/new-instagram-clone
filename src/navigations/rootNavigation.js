import { createSwitchNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';

import UnAuthNavigation from './unauthorizedNavigation';
import AuthNavigation from './authorizedNavigation';

// UTILS
import handleBackAndroid from '../utils/CustomHandleBackAndroid';

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

const AppNavigation = reduxifyNavigator(RootNavigation, "root");

const mapStateToProps = (state) => ({
  state: state.nav,
});


const AppWithNavigationState = connect(mapStateToProps)(handleBackAndroid(AppNavigation));

export default AppWithNavigationState;
