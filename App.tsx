/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '@store/index';
import RootNavigator from '@navigation/index';
import ModalProvider from '@providers/ModalProvider';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ModalProvider>
          <RootNavigator />
        </ModalProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
