import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import ChatList from './ChatList';
import Contacts from './Contact';
import HeaderRight from './HeaderRight';

export default createMaterialTopTabNavigator(
  {
    ChatList,
    Contacts,
  },
  {
    navigationOptions: () => ({
      title: 'Whatsapp',
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
