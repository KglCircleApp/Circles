import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Badge, Left, Right, Body, Icon, Text, Item, Input,H1,H2,Label,List, ListItem } from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class MessengerScreen extends Component {
  static navigationOptions = {
    header : null,
  };
   render() {
    const { navigate } = this.props.navigation;
     let {height, width} = Dimensions.get('window');
     var items = ['Category','Province','District','Sector','Cell','Village','Message'];
     return (
       <Container>
         <Header androidStatusBarColor="#2c3e50" backgroundColor="#000000">
         <Left>
            <Button onPress={()=> navigate('Register')} transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Message</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
         </Header>
         <Content>
             <H1 style={{ paddingLeft: 15}}>Enter Your :</H1>
         <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
          <Button primary rounded block style={{
            marginTop: 10,
            marginLeft: 8,
            marginRight: 8
          }}>
              <Text>Send</Text>
          </Button>
         </Content>
         <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
            <Button vertical>
              <Icon name="done-all" />
              <Text>Status</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="filing" />
              <Text>Archive</Text>
            </Button>
          </FooterTab>
        </Footer>
         </Container>
     );
   }
 }