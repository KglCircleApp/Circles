import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './app/screen/Login';
import RegisterScreen from './app/screen/Register';
import ProfileSCreen from './app/screen/Profile';

export const App = StackNavigator({
  
  Login : { 
    screen : LoginScreen
  },
  Register : { 
    screen : RegisterScreen 
  },
  Profile : {
    screen : ProfileSCreen
  },
},

{
initialRouteName: 'login',
}
);

AppRegistry.registerComponent('Circles', () => App);