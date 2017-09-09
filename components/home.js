import React, { Component } from 'react';

import {AppRegistry,Text,Image,View,TouchableOpacity,Alert} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Card,CardItem,Content } from 'native-base';

export default class home extends Component {
      constructor(){
      	super()
      	this.state={}
      	this.logout=this.logout.bind(this);
      	this.goNext=this.goNext.bind(this);
        this.goLogin=this.goLogin.bind(this);
      }

      logout(){
       Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
  [
   
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress:this.goLogin},
  ],
  { cancelable: false }
  )
      
      }

      goLogin(){
        this.props.navigation.navigate("Login");
      }

      goNext(){
      	this.props.navigation.navigate("Next");
      }
 


  render() {
  	

    return (
    	
   
    	<Container>
        <Header style={{backgroundColor:"white"}}>
          <Left>
            <Button transparent onPress={this.logout}>
            <Image
            style={{height:30,width:30}}
            source={require('../images/logout.png')}
             />
             
            </Button>
          </Left>

          <Body>
            <Title style={{color:"black",fontSize:25}}>Template</Title>
          </Body>

          </Header>

         

       
        
         <CardItem style={{backgroundColor:"steelblue"}}>
         <Text style={{fontSize:27,color:"white"}}>Select template to Complete</Text>
         </CardItem>
           <Text style={{height:70}}></Text>
            
           

          
          

         <View style={{padding:10}}>
         <TouchableOpacity onPress={this.goNext}>
         <CardItem style={{backgroundColor:"black"}}>
         <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>

         
         <Text style={{fontSize:29,color:"white"}}>Pre Grind Template</Text>
        

         </View>
         </CardItem>
         </TouchableOpacity>
          

          <Text style={{height:30}}></Text>
         
          <TouchableOpacity onPress={this.goNext}>
         <CardItem style={{backgroundColor:"black"}}>
         <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
         <Text style={{fontSize:29,color:"white"}}>Post Grind Template</Text>
         </View>
         </CardItem>
         </TouchableOpacity>

            <Text style={{height:30}}></Text>

            <TouchableOpacity onPress={this.goNext}>

         <CardItem style={{backgroundColor:"black"}}>
         <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>

         <Text style={{fontSize:29,color:"white"}}>Generic Template</Text>
          </View>
         </CardItem>
         </TouchableOpacity>



            <Text style={{height:30}}></Text>

             </View>
             
           

  

   




        </Container>

      
    

    	
    	);
    }
}
