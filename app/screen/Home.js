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

  constructor(props){
     super(props);
    this.state = {
      loading:false,
      success:false,
      data: []
      }
  }
  componentWillMount(){
    this.getData();

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
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
         </Header>
         <Content>

         {this.state.data.map((item, index)=>{
                                  return (
         <Card style={{flex: 0}} key={index}>
        
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://165.227.219.239:3000/uploads/profiles/doc.png'}} />
                <Body>
                  <Text>{item.posted_by}</Text>
                  <Text note>{item.created_at}</Text>
                </Body>
              </Left>
            </CardItem>
               
            <CardItem>
              <Body>
                <Image source={{ uri: item.featured }}  style={{height: 200, width: 400, flex: 1}}/>
                <Text>
                  {item.body}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github"/>
                  <Text>{item.upvotes}</Text>
                </Button>
              </Left>
            </CardItem>
            
          </Card>
          )
        })
    }
          
          
         
         </Content>
         <Footer>
          <FooterTab>
               <Button badge vertical active >
              <Badge><Text>2</Text></Badge>
              <Icon name="home" 
                   color='#00aced'/>
              <Text>Home</Text>
            </Button>
            <Button onPress={() => navigate('Circle')}  vertical>
              <Icon name="people" />
              <Text>Circle</Text>
            </Button>
            <Button onPress={() => navigate('Profile')}  badge vertical>
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