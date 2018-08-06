import { createStackNavigator } from 'react-navigation';
import FormLogin from './src/Screens/FormLogin';
import FormCadastro from './src/Screens/FormCadastro';


export default createStackNavigator(
  {
    Home: {
      screen: FormLogin,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Cadastro: FormCadastro,
  },
  {
    initialRouteName: 'Home',
  },
);
