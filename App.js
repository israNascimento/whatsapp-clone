import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import { YellowBox } from 'react-native';

import NavigationService from './src/NavigationService';
import Reducers from './src/Reducers';
import FormLogin from './src/Screens/FormLogin';
import FormSignup from './src/Screens/FormSignup';
import MainScreen from './src/Screens/Main';
import Chat from './src/Screens/Main/Chat';

import { PRIMARY_COLOR } from './src/Screens/styles';

YellowBox.ignoreWarnings(['Remote debugger']);
YellowBox.ignoreWarnings(['Setting a timer']);
YellowBox.ignoreWarnings(['[2019']);

const RootStack = createStackNavigator(
  {
    Home: {
      screen: FormLogin,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Chat: {
      screen: Chat,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
      }),
    },
    Signup: FormSignup,
    Main: MainScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: () => ({
      headerStyle: {
        backgroundColor: PRIMARY_COLOR,
      },
      headerTintColor: 'white',
    }),
  },
);

const AppContainer = createAppContainer(RootStack);

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
        <AppContainer
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}

export default App;
