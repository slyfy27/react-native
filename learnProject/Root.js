import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/store/Store';
import { RootStack } from './app/navigation/navigator';
import { Text } from 'react-native';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Text>ffffff</Text>
            // <Provider store = {store}>
            // <AppNavigation />
            // </Provider>
        );
    }
}