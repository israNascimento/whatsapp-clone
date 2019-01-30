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
    }),
  },
);
