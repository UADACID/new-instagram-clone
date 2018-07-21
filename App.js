/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';

import { RNCamera } from 'react-native-camera';

const TabHomeConfigs = {
  Home: {
    screen: ({navigation}) => (<View style={styles.container}><Text>Home</Text></View>)
  },
  Search: {
    screen: ({navigation}) => (<View style={styles.container}><Text>Search</Text></View>)
  },
  Add: {
    screen: ({navigation}) => (<View style={styles.container}><Text>Add</Text></View>)
  },
  Love: {
    screen: ({navigation}) => (<View style={styles.container}><Text>Love</Text></View>)
  },
  Proile: {
    screen: ({navigation}) => (<View style={styles.container}><Text>Profile</Text></View>)
  },
}

const TabHomeNavigator = createBottomTabNavigator(TabHomeConfigs, {});

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

class TabCamera extends Component<Props> {

  state = {
    showCamera: false,
    flash: 0
  }

  componentDidMount() {
    this.willFocus()
    this.didBlur()
  };

  willFocus = () => {
    const didFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        console.log({ willFocus: payload })
        // console.debug('didFocus', payload);
        this.setState({showCamera: true})
      }
    );
    return didFocusSubscription
  }

  didBlur = () => {
    const didFocusSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        console.log({ blur: payload })
        // console.debug('didBlur', payload);
        this.setState({showCamera: false})
      }
    );
    return didFocusSubscription
  }

  componentWillUnmount() {
    willFocus.remove();
    didBlur.remove();
  }

  render() {
    console.log(RNCamera.Constants.FlashMode.on);
    console.log(RNCamera.Constants.Type.back);
    console.log(this.props.navigation);
    console.log(this);
    return (
      <View style={styles.container}>
        {/* <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        >
          {({ camera, status }) => {
            console.log({camera, status});
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera> */}
      </View>
    );
  }
}

const RouteConfigs = {
  TabCamera: {
    screen: TabCamera
  },
  TabHome: {
    screen: TabHomeNavigator
  },
  TabInbox: {
    screen: ({navigation}) => (
      <View style={[styles.container, styles.tabInbox]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TabHome')}
        >
          <Text>Inbox</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const getActiveTabHomeRouteName = (props) => {
  const { routes, index } = props;
  const activeRoute = routes[index];
  if (activeRoute.routeName === 'TabHome') {
    const secoundIndex = activeRoute.index;
    const secoundRoutes = activeRoute.routes;
    const secoundActiveRoute = secoundRoutes[secoundIndex];
    const { routeName } = secoundActiveRoute
    if (routeName === 'Home') {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }

};

const BottomTabNavigatorConfig = {
  initialRouteName: 'TabHome',
  swipeEnabled: (props) => {
    return getActiveTabHomeRouteName(props);
  },
  tabBarComponent: () => <View />,
  lazyLoad: true
  // lazy: false
};

const TabHome = createMaterialTopTabNavigator(RouteConfigs, BottomTabNavigatorConfig);


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <TabHome />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderWidth: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
