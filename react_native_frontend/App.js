import React from 'react';
import { StyleSheet,
          Text,
          View } from 'react-native';
          import {
            createStackNavigator,
            createAppContainer,
            createBottomTabNavigator
              } from 'react-navigation'


import CameraScreen from './app/components/CameraComponent'
import SplashScreen from './app/components/SplashScreen'
import Supported from './app/components/Supported'


const homeScreenTabNavigator = createBottomTabNavigator({
  CameraScreen,
  Supported
})



const Rootstack = createStackNavigator({
  Home: {
         screen: SplashScreen,
         navigationOptions: {
             header: null,
         },
     },
  Picture: {
            screen: homeScreenTabNavigator,
            navigationOptions: {
                header: null,
            },
        },
},
{
  initialRouteName: 'Home'
}
);

const AppContainer = createAppContainer(Rootstack);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
