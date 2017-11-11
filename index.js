import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './app/screen/Login';
import RegisterScreen from './app/screen/Register';

export const App = StackNavigator({
  
  Login : { 
    screen : LoginScreen
  },
  Register : { 
    screen : RegisterScreen 
  },
},

{
initialRouteName: 'Login',
}
);

AppRegistry.registerComponent('Circles', () => App);