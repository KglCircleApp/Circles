import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Title, CardItem,Card,Content, Footer, List,ListItem,Thumbnail,FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input,H2,Label } from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title:  'Profile',
    headerLeft: <Icon name={'arrow-back'}
                            onPress={ () => { navigation.goBack() }} />,
    
  });
  constructor(props){
    super(props);
    this.state = {
        //data: [],
        loading:false,
       
        }
} 



  getData(){
    
return fetch('http://165.227.219.239:3000/api/users/profile/miller', {
           method: 'GET',
      })
        .then((response) => response.json())
        .then((responseJson) => {
         this.setState({data: responseJson});
         console.log(this.state.data);
        })
        .catch((error) => {
          console.log(error);
        });
        
     }

   render() {
    const item ={
      first_name: 'nsanzumuhire',
      last_name: 'daniel',
      email: 'nsanzudanny@gmail.com',
      username: 'danny kush',
      avatar: "http://165.227.219.239:3000/uploads/profiles/doc.png",
      description: "am a  full stack developper and i work with react-native,reactJS,GraphQL ",
      numbers: "078456568",
      access_code: "circle-07845",
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
          
         
            
         {/* <View style={{ justifyContent: "center",marginLeft:25,marginTop:5 }}>
              <Thumbnail source={{uri: item.avatar}} style={{height: 300, width: 300, flex: 1,justifyContent:'center'}}/>
              </View>     */}
            
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
                     <Text>numbers</Text>
                   </ListItem>
                   <ListItem>
                     <Text>{item.numbers}</Text>
                   </ListItem>

                   <ListItem itemDivider>
                     <Text>description</Text>
                   </ListItem>
                   <ListItem>
                     <Text>{item.description}</Text>
                   </ListItem>

                   <ListItem itemDivider>
                     <Text>email</Text>
                   </ListItem>
                   <ListItem>
                     <Text>{item.email}</Text>
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