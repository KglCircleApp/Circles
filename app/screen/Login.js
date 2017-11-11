import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions, AppRegistry } from 'react-native';
import { Container,  Content,Header, Button, Badge, Left, Right, Body, Icon, Text, Item, Input,H1,H2,Label,List} from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends Component {

  static navigationOptions = {
    header : null,
  };

   render() {
    const { navigate } = this.props.navigation;
     let {height, width} = Dimensions.get('window');
     return (
       <Container>
         <Header androidStatusBarColor="#2c3e50" style={{display:'none'}}/>
        <Content >
        <View style={styles.container}>
     
          <View style={styles.logocontainer}>
           <Image style={styles.logo} source={require('../image/circles.png')} />
           
     </View>
     </View>
        </Content>
      </Container>
     );
   }
 }

 const styles = StyleSheet.create({
   
container:{
 flex:1,
 textAlign:'center' 

}, 

logo:{
  width:100,
  height:100
   },

logocontainer:{
  
  flexGrow:1,
  justifyContent:'center',
  
             },
subtitle:{
    color:'#FFF',
    textAlign:'center',
    width:160,
    marginTop:10,
    opacity:0.6
        }                                                             


});