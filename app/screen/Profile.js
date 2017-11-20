import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Title, CardItem,Card,Content, Footer, List,ListItem,Thumbnail,FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input,H2,Label } from 'native-base';
import { StackNavigator } from 'react-navigation';
const FBSDK = require('react-native-fbsdk');
const {
  AccessToken
} = FBSDK;

export default class ProfileScreen extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title:  'Profile',
    headerLeft: <Icon name={'arrow-back'}
                            onPress={ () => { navigation.goBack() }} />,
    
  });
  constructor(props){
    super(props);
    this.state = {
        data: {},
        loading:false,
       
        }
    this.getProfileInfo();
} 

getProfileInfo(){
  return AccessToken.getCurrentAccessToken().then(
    (data) => {
       let token = data.accessToken.toString();
       fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends,picture,about&access_token=' + token)
       .then((response) => response.json())
       .then((json) => {
         // Some user object has been set up somewhere, build that user here
        //  alert(JSON.stringify(json));
         this.setState({data: json});  
       })
       .catch(() => {
         reject('ERROR GETTING DATA FROM FACEBOOK')
       })
    }
  )
}

   render() {
    const item ={
      email: this.state.data.email,
      username: this.state.data.name,
      avatar: this.state.data.picture?this.state.data.picture.data.url :"http://165.227.219.239:3000/uploads/profiles/doc.png",
      description: "About me",
      id: this.state.data.id,
      materials: [
          "NodeJS",
          "React-Native"
      ],
      projects: [
        {name:'circles',link:'https://github.com/spencercarli/getting'},
        { name: 'balls', link: 'https://github.com/spencercarli/getting' }
      ]
    }
    const { navigate } = this.props.navigation;
     let {height, width} = Dimensions.get('window');
     return (
       <Container>
         <Header androidStatusBarColor="#2c3e50" style={{display:'none'}}/>
         <Content >
          
         <Text style={{ alignSelf: 'center'}}>{item.first_name}</Text>
         <Thumbnail source={{ uri: item.avatar }} style={{ alignSelf: 'center'}}/>

         <Card>
            <CardItem>
              <Body>
                 <List>
                   <ListItem itemDivider >
                     <Text>name</Text>
                   </ListItem>
                 
                   <ListItem>
                     <Text>{item.username}</Text>
                   </ListItem>
                   <ListItem itemDivider>
                     <Text>email</Text>
                   </ListItem>
                   <ListItem>
                     <Text>{item.email}</Text>
                   </ListItem>

                   <ListItem itemDivider>
                     <Text>description</Text>
                   </ListItem>
                   <ListItem>
                     <Text>{item.description}</Text>
                   </ListItem>
                  
                 </List>
              </Body>
            </CardItem>
           
         </Card>
                   
         </Content>
         </Container>
     );
   }
 }