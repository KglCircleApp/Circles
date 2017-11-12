import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions } from 'react-native';
import { StyleProvider, Container, Card, CardItem, Thumbnail, Header, Title, Content, Footer, FooterTab, Button, Badge, Left, Right, Body, Icon, Text, Item, Input,H1,H2,Label,List, ListItem } from 'native-base';
import { StackNavigator } from 'react-navigation';
import  getTheme from '../../themes/components';
import  smartTheme from '../../themes/variables/smartTheme';


export default class HomeScreen extends Component {
  static navigationOptions = {
    header : null,
  };
   render() {
    const { navigate } = this.props.navigation;
     let {height, width} = Dimensions.get('window');
     return (
      <StyleProvider style={getTheme(smartTheme)}>
       <Container>
         <Header androidStatusBarColor="#2c3e50" style={{ backgroundColor: '#2c3e50'}}>
         <Left>
         </Left>
          <Body>
            <Title>Feeds</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
         </Header>
         <Content>
         <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://165.227.219.239:3000/uploads/profiles/doc.png'}} />
                <Body>
                  <Text>Mucyo fred</Text>
                  <Text note>Nov 12, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={ require('../image/reactnative.png')}  style={{height: 200, width: 400, flex: 1}}/>
                <Text>
                  React native is greate tool, It's really helps programmer get things done quckliy
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://165.227.219.239:3000/uploads/profiles/kush.png'}} />
                <Body>
                  <Text>Danny</Text>
                  <Text note>Nov 12, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={ require('../image/graph.png')}  style={{height: 250, width: 400, flex: 1}} resizeMode='contain' />
                <Text>
                  Get started with GraphQl 
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
         
         </Content>
         <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="document" />
              <Text>Docs</Text>
            </Button>
            <Button onPress={() => navigate('Profile')} active badge vertical>
              <Badge ><Text>5</Text></Badge>
              <Icon active name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
         </Container>
         </StyleProvider>
     );
   }
 }