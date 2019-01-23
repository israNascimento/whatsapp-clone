import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';

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

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC7fAALxtBCcebGEqiztGB1XprEL_N54l0',
      authDomain: 'whatsapp-1dfda.firebaseapp.com',
      databaseURL: 'https://whatsapp-1dfda.firebaseio.com',
      projectId: 'whatsapp-1dfda',
      storageBucket: 'whatsapp-1dfda.appspot.com',
      messagingSenderId: '213324904258',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(Reducers, {}, applyMiddleware(thunk))}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;
