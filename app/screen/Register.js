import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input,H2,Label } from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header : null,
  };
   render() {
    const { navigate } = this.props.navigation;
     let {height, width} = Dimensions.get('window');
     return (
       <Container>
         <Header androidStatusBarColor="#2c3e50" style={{display:'none'}}/>
         <Content>
        
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