import { AppRegistry } from 'react-native';
import App from './App';
import LoginScreen from './app/screen/Login';
import RegisterScreen from './app/screen/Register';
import { StackNavigator } from 'react-navigation';


export const mApp = StackNavigator({
    Home : { screen : App },
    Login : { screen : LoginScreen},
    Register : { screen : RegisterScreen },
  },
  { headerMode: 'screen' }
  );
  

AppRegistry.registerComponent('Circles', () => mApp);
