import { createMaterialTopTabNavigator } from 'react-navigation';

import Blue from './Blue';
import Red from './Red';

export default createMaterialTopTabNavigator(
  {
    Blue,
    Red,
  },
  {
    navigationOptions: () => ({
      title: 'Whats',
      headerStyle: {
        backgroundColor: '#115E54',
        elevation: 0,
      },
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
