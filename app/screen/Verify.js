import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input,H2,Label } from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class VerifyScreen extends Component {
  static navigationOptions = {
    header : null,
  };
   render() {
    const { navigate } = this.props.navigation;
     let {height, width} = Dimensions.get('window');
     return (
       <Container style={{ marginLeft: 8, marginRight: 8}}>
         <Header androidStatusBarColor="#2c3e50" style={{display:'none'}}/>
         <Content>
         <H2 style={{ marginTop: 150, alignSelf:'center', flexDirection:'row'}}>Circles</H2>
         <Image source={require('../image/circles.png')}  
            style={[{height: 150, width: 150, alignSelf: 'center', marginBottom: 50 }]} />
         <Text style={{ alignSelf:'center',marginBottom: 8}}>Add below code we sent you</Text>
         <Item rounded style={{
             marginBottom: 15
            }}>

           <Icon active name='code' style={{ color: '#000000' }} />
            <Input  placeholder="Enter Code" style={{ fontSize: 16 }} />
            </Item>
            <Button onPress={() => navigate('Home')} rounded block style={{ 
               paddingLeft : 20,
               paddingRight: 20,
               backgroundColor: '#2c3e50'
              }}>
               <Text>verify</Text>
            </Button>
         </Content>
         </Container>
     );
   }
 }