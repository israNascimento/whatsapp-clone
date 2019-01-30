import { createMaterialTopTabNavigator } from 'react-navigation';

import Chat from './Chat';
import Contacts from './Contacts';

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
