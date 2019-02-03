import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import Chat from './Chat';
import Contacts from './Contact/Contacts';
import HeaderRight from './HeaderRight';

export default createMaterialTopTabNavigator(
  {
    Chat,
    Contacts,
  },
  {
    navigationOptions: () => ({
      title: 'Whats',
      headerStyle: {
        backgroundColor: '#115E54',
        elevation: 0,
      },
      headerLeft: null,
      headerRight: (
        <HeaderRight />
      ),
    }),
    tabBarOptions: {
      labelStyle: {
        fontWeight: 'bold',
      },
      style: {
        backgroundColor: '#115E54',
      },
    },
  },
);
