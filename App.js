import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducers from './src/Reducers';
import FormLogin from './src/Screens/FormLogin';
import FormSignup from './src/Screens/FormSignup';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: FormLogin,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Signup: FormSignup,
  },
  {
    initialRouteName: 'Home',
  },
);

export default () => (
  <Provider store={createStore(Reducers)}>
    <RootStack />
  </Provider>
);
