import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input,H2,Label } from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class RegisterScreen extends Component {
  static navigationOptions = {
    header : null,
  };
   render() {
    const { navigate } = this.props.navigation;
     let {height, width} = Dimensions.get('window');
     return (
       <Container><Header androidStatusBarColor="#2c3e50" style={{display:'none'}}/>
       <Content>
          <H2 style={{ 
             color : '#ffffff',
             flexDirection: 'column',
             justifyContent: 'center',
             alignSelf: 'center',
             bottom: 180
            }}>
          Get there with GERAYO
           </H2>
         <Item rounded style={{ 
           bottom: 150,  
           paddingLeft : 2,
           paddingRight: 2,
          }}>
         <Icon active name='call' style={{ color: '#ffffff' }} />
          <Input placeholderTextColor="#ffffff" placeholder="Enter Phone number" style={{ fontSize: 16, color: '#ffffff' }} />
          </Item>
          <Button onPress={() => navigate('Verify')} rounded block  info style={{ 
             paddingLeft : 20,
             paddingRight: 20,
             bottom: 100
            }}>
             <Text>register</Text>
          </Button>
       </Content>
         </Container>
     );
   }
 }
 
let styles = StyleSheet.create({
   backgroundImage: {
   flex: 1,
   backgroundColor:'transparent',
   justifyContent: 'flex-end',
   alignItems: 'center',
  }
 });