import React, { Component } from 'react';
import {Image,StyleSheet, View, Dimensions, AppRegistry,TouchableOpacity,Keyboard} from 'react-native';
import { Container,  Content,Header, Button, Badge, Left, Right, Body, Icon, Text, Item, Input,H1,H2,Label,List,Toast} from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends Component {

  static navigationOptions = {
    header : null,
  };

  constructor(props){
    super(props);
    this.state = {
        numbers:'',
        password:'',
        loading:false,
        showToast: false
        }
} 


userLogin() {
   
  let baseUrl='http//165.227.219.239:3000/api';
 // let api='users/auth';

  Keyboard.dismiss();
  this.setState({
    loading:true
  });
  if (this.state.number == '' || this.state.password == ''){
      /*Toast.show({
              text: 'Empty Form! ',
              position: 'bottom',
              buttonText: 'Close',
              duration:5000
            });*/
            console.log('empty forms');
  }
    return fetch('http//165.227.219.239:3000/api/users/auth',{
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      numbers: this.state.numbers,
      password: this.state.password
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
      if(responseJson.success == true){
          this.setState({
           loading:false
          });
         
          //this.saveItem('id_token', responseJson.token),
          //this.saveItem('user',responseJson.user.user)
          this.props.navigation.navigate('Profile');
          
       
      }else{
        Keyboard.dismiss(),
        this.setState({
         loading:false
         });
        Toast.show({
              text: responseJson.message,
              position: 'bottom',
              buttonText: 'Close',
              duration:5000
            })
        //alert(responseJson.message);
         
      }
    
  })
  .catch((err)=>{
     this.setState({
     loading:false
      });
      Toast.show({
              text: 'Network Error! ',
              position: 'bottom',
              buttonText: 'Close',
              duration:5000
            });
  });

 }



   render() {
    const { navigate } = this.props.navigation;
     let {height, width} = Dimensions.get('window');
     return (
       <Container>
         <Header androidStatusBarColor="#2c3e50" style={{display:'none'}}/>
         <Content style={{ marginLeft: 8, marginRight: 8 }}>
         <H2 style={{ marginTop: 60, alignSelf:'center', flexDirection:'row',color: '#2c3e50'}}>Circle</H2>
         <Image source={require('../image/circles.png')}  
            style={[{height: 150, width: 150, alignSelf: 'center', marginBottom: 50 }]} />
          
            <Item rounded style={{
             marginBottom: 15
            }}>

           <Icon active name='call' style={{ color: '#2c3e50' }} />
            <Input  placeholder="Enter Your Number" style={{ fontSize: 16 }} 
               onChangeText={(value) => this.setState({ username:value })}
            />
            </Item>

            <Item rounded style={{
             marginBottom: 15
            }}>

           <Icon active name='lock' style={{ color: '#2c3e50' }} />
            <Input  
            returnKeyType='next'
            secureTextEntry={true}
            placeholder="Enter Password" style={{ fontSize: 16 }} 
              onChangeText={(value) => this.setState({ password:value })}
            />
            </Item>
            <Button  rounded block style={{ 
               paddingLeft : 20,
               paddingRight: 20,
               backgroundColor: '#2c3e50'
              }}
              //onPress={()=> {this.userLogin() }}
              onPress={() => navigate('Home')}
              >
               <Text>Login</Text>
            </Button>
            
            <View style={styles.signupTextCont}>
					   <Text style={styles.signupText}>Don't have an account yet?</Text>
					   <TouchableOpacity ><Text style={styles.signupButton} onPress={() => navigate('Register')}> Signup</Text></TouchableOpacity>
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
  alignItems:'center',
  flexGrow:1,
  justifyContent:'center',
  marginTop:50
  
             },
subtitle:{
    color:'#FFF',
    textAlign:'center',
    width:160,
    marginTop:10,
    opacity:0.6
        },
        signupTextCont : {
          flexGrow: 1,
          marginTop:45,
          alignItems:'flex-end',
          justifyContent :'center',
          paddingVertical:16,
          flexDirection:'row'
        },
        signupButton: {
          color:'#2c3e50',
          fontSize:16,
        }                                                    


});