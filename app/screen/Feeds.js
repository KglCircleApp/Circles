import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Title, Card, CardItem, Segment, Thumbnail, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input, H2, Label, List, ListItem } from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class RegisterScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Feeds',
    headerLeft: <Icon name={'arrow-back'}
      onPress={() => { navigation.goBack() }} />,

  });
   render() {
    const { navigate } = this.props.navigation;
     let {height, width} = Dimensions.get('window');
     return (
        <Container>
         
         <Segment style={{ backgroundColor: '#ffffff' }}>
           <Button first style={{ backgroundColor: '#2c3e50' }} rounded block>
               <Text>Your circle</Text>
             </Button>
           <Button style={{ backgroundColor: '#2c3e50' }} rounded block>
               <Text>Circle docs</Text>
             </Button>
            
           </Segment>
           <Content padder>
             <Text>Awesome segment</Text>
           </Content>
         </Container>
     );
   }
 }