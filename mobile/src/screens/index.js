import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import { render } from 'react-dom';

const AuthNavigator = createStackNavigator(
    {
        Login: {
            getScreen: () => require('./LoginScreen').default
        }
    },
    {
        navigationOptions: {
            header: null,
        },
    },
    )


const TabNavigation = createBottomTabNavigator(
    {
        Home: {
            getScreen: () => require('./LoginScreen').default
        }
    }
)

const MainNavigator = createStackNavigator(
    {
        Tab: TabNavigation
    }
)

const AppNavigator = createSwitchNavigator(
    {
        Splash: {
            getScreen: () => require('./SplashScreen').default
        },
        Auth: AuthNavigator,
        Main: MainNavigator,
    },
    {
        initialRouteName: 'Splash'
    },
   
)

class Navigation extends Component{
    state = {};
    render() {
        return <AppNavigator />
    }
}

export default Navigation;