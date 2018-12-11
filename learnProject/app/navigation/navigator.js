import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from '../home/Main'
import Redux1 from '../home/Redux1';

//注册界面
const StackRouteConfigs = {
    Main : {screen : Main,
        navigationOptions: () => ({
            title: `A`,
            headerBackTitle: null
          }),
        },
    Redux1 : {screen : Redux1,
        navigationOptions: () => ({
            title: `B`,
            headerBackTitle: null
          }),
        },
};
const AppNavigation = createStackNavigator(StackRouteConfigs);


const RootStack = createStackNavigator({
    // Home: {
    //     screen: HomeScreen
    // },
    // Details: {
    //     screen: DetailsScreen
    // }
});

export default RootStack;