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
       <Container>
         <Header androidStatusBarColor="#2c3e50" style={{display:'none'}}/>
         <Content style={{ marginLeft: 8, marginRight: 8 }}>
         <H2 style={{ marginTop: 150, alignSelf:'center', flexDirection:'row'}}>Circle</H2>
         <Image source={require('../image/circles.png')}  
            style={[{height: 150, width: 150, alignSelf: 'center', marginBottom: 50 }]} />
          <Item rounded style={{ marginBottom: 5 }}>
          <Icon active name='person' style={{ color: '#2c3e50' }} />
          <Input  placeholder="Enter Username" style={{ fontSize: 16 }} />
          </Item>
           <Item rounded style={{ marginBottom: 5 }}>
           <Icon active name="mail" style={{ color: '#2c3e50' }} />
            <Input  placeholder="Enter E-mail" style={{ fontSize: 16 }} />
            </Item>
           <Item rounded style={{ marginBottom: 5 }}>
           <Icon active name='call' style={{ color: '#2c3e50' }} />
            <Input  placeholder="Enter Phone number" style={{ fontSize: 16 }} />
            </Item>
            <Item rounded style={{ marginBottom: 15 }}>
            <Icon active name='lock' style={{ color: '#2c3e50' }} />
            <Input  secureTextEntry={ true} placeholder="Enter Password" style={{ fontSize: 16 }} />
            </Item>
            <Button onPress={() => navigate('Verify')} rounded block style={{ 
               paddingLeft : 20,
               paddingRight: 20,
               backgroundColor: '#2c3e50'
              }}>
               <Text>register</Text>
            </Button>
         </Content>
         </Container>
     );
   }
 }