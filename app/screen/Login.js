import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions, AppRegistry,TouchableOpacity,Keyboard} from 'react-native';
import { Container,  Content,Header, Button, Badge, Left, Right, Body, Icon, Text, Item, Input,H1,H2,Label,List,Toast} from 'native-base';
import { StackNavigator } from 'react-navigation';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
  LoginButton,
  AccessToken
} = FBSDK;


export default class LoginScreen extends Component {

  static navigationOptions = {
    header : null,
  };
  

  renderLogin() {
    const { navigate } = this.props.navigation;
    let {height, width} = Dimensions.get('window');
    return (
      <Container>
        <Header androidStatusBarColor="#2c3e50" style={{display:'none'}}/>
        <Content style={{ marginLeft: 8, marginRight: 8 }}>
        <H2 style={{ marginTop: 60, alignSelf:'center', flexDirection:'row',color: '#2c3e50'}}>Circle</H2>
        <Image source={require('../image/circles.png')}  
           style={[{height: 150, width: 150, alignSelf: 'center', marginBottom: 50 }]} />   

           <View style={{ backgroundColor: '#425bb4',width:width-16,marginLeft:8,marginRight:8, height:40,alignContent:'center' }} >
           <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")} />
          </View>
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