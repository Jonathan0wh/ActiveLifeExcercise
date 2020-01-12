/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import NavigationStack from './navigation/NavigationStack';

/* redux store */
import store from './store/configureStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationStack />
      </Provider>
    );
  }
}
