import React, { Component } from 'react';
import {AppRegistry,Text,View,Image,Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input,Icon,Button } from 'native-base';

export default class login extends Component {
	constructor(){
		super()
		this.state={invalidPassword:"",invalidUsername:""};
		this.getUsername=this.getUsername.bind(this);
		this.getPassword=this.getPassword.bind(this);
		this.nextPage=this.nextPage.bind(this);
    this.usernameRegex=(/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/)
	}

	getUsername(text){
		this.setState({username:text})

		if(text==""){
			this.setState({invalidUsername:"Please enter Username"});
			return false;
		}

    else if(!this.usernameRegex.test(text)){
            this.setState({invalidUsername: 'Please enter valid username'});
            return false;
          }


		else{
			this.setState({invalidUsername:""});
			return true;
		}
	}

	getPassword(text){
		this.setState({password:text})

		

		
        
		if(text==""){
			this.setState({invalidPassword:"Please enter password"});
			return false;
		}

		 else if(text!=this.state.username+"1234"){
			this.setState({invalidPassword:"Password must be in the pattern of username with suffix 1234 "});
			return false;

		}


		else if(text==this.state.username+"1234"){
			this.setState({invalidPassword:"Password accepted"});
			return true;
		}

		else{
			this.setState({invalidPassword:""});
			return true;
		}
	}
  
    nextPage(){
    	if( this.getPassword(this.state.password)==false){

        Alert.alert("Please fill all the fields")
       

       }

       else if( this.getUsername(this.state.username)==false){

        Alert.alert("Please fill all the fields ")
       

       }

    	else{
    		this.props.navigation.navigate("Home");
    	}
    }
 


   


  render() {
  	let pic1= {
       
       uri:"data:image/jpeg;base64,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"

  		};

  	let pic2= {
          uri:"https://cdn1.iconfinder.com/data/icons/hawcons/32/698843-icon-116-lock-open-512.png"

  		};




    return (
    	<Container>
        <Content>

      <View style={{flexDirection:"row",justifyContent:"center"}}>
        <Image
          source={require('../images/logo.png')}
        />
        </View>
      
        <View style={{padding:22}}>
         

         
         <Text style={{height:20}}></Text>
          <Form>
            <Item>
          <Icon name="person" style={{color:"dodgerblue"}}/>
              <Input 
              placeholder="Username"
              value={this.state.username}
              onChangeText={this.getUsername}
               />

          
            </Item>
           
           <Text style={{color:"blue",fontSize:20}}>
              {this.state.invalidUsername}
              </Text>

            <Item last>
            <Image source={pic2} style={{height:22,width:22}}/>
              <Input 
              placeholder="Password"
              value={this.state.password}
              onChangeText={this.getPassword}
              />

           

              
            </Item>
               <Text style={{color:"blue",fontSize:20}}>
              {this.state.invalidPassword}
              </Text>
          </Form>
          
          <Text style={{height:70}}></Text>
          <View style={{justifyContent:"center",alignItems:"center"}}>
           
           <Button block dark onPress={this.nextPage}>
            <Text style={{color:"white",fontSize:25}}>Login</Text>

          </Button>

          </View>

          </View>
        </Content>
      </Container>

    	);
    }
}
