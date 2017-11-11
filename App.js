import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input,H2,Label } from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class App extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    const { navigate } = this.props.navigation;
    let {height, width} = Dimensions.get('window');
    return (
      <Container><Header androidStatusBarColor="#2c3e50" style={{display:'none'}}/>
      <Content style={[styles.fix]}>
        <H2 style={{ color:'#2c3e50'}}>Circle</H2>
      <Image source={require('./app/image/circles.png')}  
            style={[styles.backgroundImage, {height: 100, width: 100}]} />
        <Button onPress={() => navigate('Verify')} rounded block style={{ 
          alignSelf: 'center',
          backgroundColor: '#2c3e50',
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
 },
 fix:{
   marginTop: 24,
 }
})