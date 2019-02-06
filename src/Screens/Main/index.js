import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import ChatList from './ChatList';
import Contacts from './Contact';
import HeaderRight from './HeaderRight';
import { PRIMARY_COLOR } from '../styles';

export default createMaterialTopTabNavigator(
  {
    ChatList,
    Contacts,
  },
  {
    navigationOptions: () => ({
      title: 'Whatsapp',
      headerStyle: {
        backgroundColor: PRIMARY_COLOR,
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
        backgroundColor: PRIMARY_COLOR,
      },
    },
  },
);
