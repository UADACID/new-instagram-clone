import React, { Component } from 'react';
import { BackHandler, View } from "react-native";
import { NavigationActions } from 'react-navigation';


const handleBackAndroid = (StackComponent) => {
  class CustomHandleBackAndroid extends Component {

    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
      const { dispatch } = this.props;
      dispatch(NavigationActions.back());
      return true;
    }

    render() {
      return (
      <View style={{ flex: 1}}>
        <StackComponent {...this.props} />
      </View>
      )
    }
  }

  return CustomHandleBackAndroid;
}


export default handleBackAndroid;