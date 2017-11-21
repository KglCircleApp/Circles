import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions } from 'react-native';
import { StyleProvider, Container, Card, CardItem, Thumbnail, Header, Title, Content, Footer, FooterTab, Button, Badge, Left, Right, Body, Icon, Text, Item, Input,H1,H2,Label,List, ListItem } from 'native-base';
import { StackNavigator } from 'react-navigation';
import  getTheme from '../../themes/components';
import  smartTheme from '../../themes/variables/smartTheme';

export default class PostScreen extends Component {
  static navigationOptions = {
    header : null,
  };

  constructor(props){
     super(props);
    this.state = {
      src:'',
      loading:false,
      success:false,
      data: []
      }
  }
  openPicker(){
}

  componentWillMount(){
    

  }
  getData(){
     
        return fetch('http://165.227.219.239:3000/api/posts', {
          method: 'GET'
     })
       .then((response) => response.json())
       .then((responseJson) => {
        this.setState({data: responseJson});
        // alert(responseJson)
        
       })
       .catch((error) => {
        this.setState({success: true});
       });
    
  }

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
            <Title>Post</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
         </Header>
         <Content>

         <Item rounded style={{ marginBottom: 5 }}>
          <Input  placeholder="Title" style={{ fontSize: 16 }} />
          </Item>
           <Item rounded style={{ marginBottom: 5 }}>
            <Input  
            placeholder="Body"
            multiline={true} 
            numberOfLines={5}
             style={{ fontSize: 16 }} />
            </Item>

            <Button onPress={() => ImagePicker.openPicker()} rounded block style={{ 
               paddingLeft : 20,
               paddingRight: 20,
               marginBottom:20,
               backgroundColor: '#2c3e50'
              }}>
               <Text>uploads</Text>
            </Button>

            <Button onPress={() => navigate('Verify')} rounded block style={{ 
               paddingLeft : 20,
               paddingRight: 20,
               backgroundColor: '#2c3e50'
              }}>
               <Text>submit</Text>
            </Button>
          
          
         
         </Content>
         </Container>
         </StyleProvider>
     );
   }
 }