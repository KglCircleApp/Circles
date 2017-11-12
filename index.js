import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './app/screen/Login';
import RegisterScreen from './app/screen/Register';
import VerifyScreen    from  './app/screen/Verify';
import HomeScreen      from  './app/screen/Home';

export const App = StackNavigator({
  
  Login : { 
    screen : LoginScreen
  },
  Register : { 
    screen : RegisterScreen 
  },
  Verify   : {
    screen : VerifyScreen
  },
  Home : {
    screen : HomeScreen
  }
},

{
initialRouteName: 'Login',
}
);

AppRegistry.registerComponent('Circles', () => App);