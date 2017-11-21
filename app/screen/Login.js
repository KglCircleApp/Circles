import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions, AppRegistry,TouchableOpacity,Keyboard} from 'react-native';
import { Container,  Content,Header, Button, Badge, Left, Right, Body, Icon, Text, Item, Input,H1,H2,Label,List,Toast} from 'native-base';
import { StackNavigator,NavigationActions } from 'react-navigation';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
  LoginButton,
  AccessToken
} = FBSDK;


export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
        //data: [],
        loading:false,     
        }
} 

  static navigationOptions = {
    header : null,
  };
  
  handleFacebookLogin (navigate) {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          // console.log('Login success with permissions: ' + result.grantedPermissions.toString())
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              //  alert(data.accessToken.toString());
                navigate('Home');
            }
          )
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }


  renderLogin() {
    const { navigate } = this.props.navigation;
    let {height, width} = Dimensions.get('window');
    return (
      <Container>
        <Header androidStatusBarColor="#2c3e50" style={{display:'none'}}/>
        <Content style={{ marginLeft: 8, marginRight: 8 }}>
        <H2 style={{ marginTop: 80,marginBottom:10, alignSelf:'center', flexDirection:'row',color: '#2c3e50'}}>Circle</H2>
        <Image source={require('../image/circles.png')}  
           style={[{height: 150, width: 150, alignSelf: 'center', marginBottom: 50 }]} />   

           <Button iconLeft onPress={this.handleFacebookLogin(navigate)} rounded block style={{ 
               marginTop:50,
               paddingLeft : 20,
               paddingRight: 20,
               backgroundColor: '#2c3e50'
              }}>
              <Icon name="logo-facebook" />
               <Text>Continue with facebook</Text>
            </Button>
       </Content>
     </Container>
    );
  }

  render() {
    return (
      this.renderLogin()
    )
   }
 }

const styles = StyleSheet.create({

container:{
 flex:1,
 textAlign:'center' 

}, 

logo:{
  width:100,
  height:100
   },

logocontainer:{
  alignItems:'center',
  flexGrow:1,
  justifyContent:'center',
  marginTop:50
  
             },
subtitle:{
    color:'#FFF',
    textAlign:'center',
    width:160,
    marginTop:10,
    opacity:0.6
        },
        signupTextCont : {
          flexGrow: 1,
          marginTop:45,
          alignItems:'flex-end',
          justifyContent :'center',
          paddingVertical:16,
          flexDirection:'row'
        },
        signupButton: {
          color:'#2c3e50',
          fontSize:16,
        },
        button: {
          height: 50,
          width: 300,
          backgroundColor: '#2c3e50',
          marginBottom: 10,
        },
        buttonText: {
          color: '#fff',
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
        },
        label: {
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 20,
        },
        text: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
        },

});