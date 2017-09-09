import React, { Component } from 'react';
import {AppRegistry,Text,Image,View,TouchableOpacity,Share,AsyncStorage,ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Card,CardItem,Content } from 'native-base';
import FAB from 'react-native-fab';


export default class next extends Component {

	constructor(){
		super()
		this.state={bool:true,color:"white",color1:"white",color2:"white",first:"",second:"",third:"",inspect:"We",status:false};
		this.back=this.back.bind(this);
		this.switch=this.switch.bind(this);
		this.next1=this.next1.bind(this);
    this.switch1=this.switch1.bind(this);
    this.switch2=this.switch2.bind(this);
    this.send=this.send.bind(this);
	}

   componentDidMount(){
 
 AsyncStorage.getItem("Key")
 .then((success)=>{

  var data=JSON.parse(success);
  this.setState({date:data.info.date});
  this.setState({inspector:data.info.inspector});
  this.setState({a:data.info.a});
  this.setState({turnout:data.info.turnout});
  this.setState({b:data.info.b});
  this.setState({c:data.info.c});
  this.setState({d:data.info.d});
  this.setState({e:data.info.e});
  this.setState({f:data.info.f});
  this.setState({sel:data.info.sel});
  this.setState({g:data.info.g});
  this.setState({comments:data.info.comments});
  this.setState({h:data.info.h});
  this.setState({i:data.info.i});
  this.setState({sel1:data.info.sel1});
  this.setState({sel2:data.info.sel2});
  this.setState({sel3:data.info.sel3});
  this.setState({sel4:data.info.sel4});
  this.setState({comments1:data.info.comments1});
  this.setState({data:data.info.data});
  this.setState({comments2:data.info.comments2});
  this.setState({j:data.info.j});
  this.setState({up:data.info.up});
  this.setState({down:data.info.down});
  this.setState({sel5:data.info.sel5});
  if(this.state.inspector==""){
  this.setState({inspect:"We"})
}
else{
  this.setState({inspect:data.info.inspector})
}
  
 })
}


	back(){
		this.props.navigation.navigate("Home");
	}
	switch(){
    if(this.state.bool==true && this.state.inspector==""){
		this.setState({
      bool:false,
      color:"green",
      first:"We",
      status:false

    })
  }
   
   else if(this.state.bool==true && this.state.inspector!=""){
    this.setState({
      bool:false,
      color:"green",
      first:"We",
      status:true
    })
   }

   else {
    this.setState({
      bool:true,
      color:"white",
      first:"",
      status:false
    })
   }




	}

  switch1(){
    if(this.state.bool==true){
    this.setState({
      bool:false,
      color1:"green",
      second:"Are Enjoying"
    })
  }
   
   else{
    this.setState({
      bool:true,
      color1:"white",
      second:""
    })
   }


  }

  switch2(){
    if(this.state.bool==true){
    this.setState({
      bool:false,
      color2:"green",
      third:"With React Native"
    })
  }
   
   else{
    this.setState({
      bool:true,
      color2:"white",
      third:""
    })
   }
  }

  send() {
  Share.share({
    message: (
      
   
     
     "Date:- "+(this.state.date)+"                                                          Name of Inspector:-"+
     (this.state.inspector)
    
     ),
    url: 'http://bam.tech',
    title: 'Wow, did you see that?'
  }, {
    
    dialogTitle: 'Share Message'
    
    
  })
}



	next1(){
		this.props.navigation.navigate("Start");
	}




  render() {
    return (
    	<Container>
      <ScrollView>
         
     
        <Header style={{backgroundColor:"white"}}>
          <Left>
            <Button transparent onPress={this.back}>
            <Image
            style={{height:30,width:30}}
            source={require('../images/back.png')}
             />
             
           </Button>
          </Left>

          <Body>
            <Title style={{color:"black",fontSize:25}}>Pre Grind</Title>
          </Body>

          </Header>

          <Text style={{height:30}}></Text>

         <View>
          <View style={{flexDirection:"row",justifyContent:"space-around"}}>

          <Button onPress={this.send} style={{backgroundColor:"black"}} >
          <Text style={{color:"white",fontSize:20}}>Send To ARTC</Text>
          </Button>

           <Button disabled={this.state.bool}>
           <Text style={{color:"white",fontSize:20}}>Delete Submission</Text>
           </Button>
           </View>
           </View>

       <Text style={{height:70}}></Text>

      
         <TouchableOpacity onPress={this.switch}>
         <CardItem style={{backgroundColor:this.state.color}}>
         <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>

         
         <Text style={{fontSize:29,color:"black"}}>{this.state.inspect}</Text>
        

         </View>
         </CardItem>
         </TouchableOpacity>

         {this.state.status?
            
            <View>
            <Text style={{color:"black",fontSize:20}}> {this.state.date}</Text>
            <Text style={{color:"black",fontSize:20}}> {this.state.a}</Text>
            <Text style={{color:"black",fontSize:20}}>{this.state.turnout}</Text>
            <Text style={{color:"black",fontSize:20}}>{this.state.b}</Text>
            <Text style={{color:"black",fontSize:20}}>{this.state.c}</Text>  
            <Text style={{color:"black",fontSize:20}}>{this.state.d}</Text> 
            <Text style={{color:"black",fontSize:20}}>{this.state.e}</Text>  
            <Text style={{color:"black",fontSize:20}}>{this.state.f}</Text>
            <Text style={{color:"black",fontSize:20}}>{this.state.sel}</Text> 
            <Text style={{color:"black",fontSize:20}}>{this.state.g}</Text>  
            <Text style={{color:"black",fontSize:20}}>{this.state.comments}</Text>  
            <Text style={{color:"black",fontSize:20}}>{this.state.h}</Text>  
            <Text style={{color:"black",fontSize:20}}>{this.state.i}</Text> 
            <Text style={{color:"black",fontSize:20}}>{this.state.sel1}</Text> 
           <Text style={{color:"black",fontSize:20}}>{this.state.sel2}</Text> 
           <Text style={{color:"black",fontSize:20}}>{this.state.sel3}</Text> 
           <Text style={{color:"black",fontSize:20}}>{this.state.sel4}</Text>    
            <Text style={{color:"black",fontSize:20}}>{this.state.comments1}</Text>       
            <Text style={{color:"black",fontSize:20}}>{this.state.data}</Text>
            <Text style={{color:"black",fontSize:20}}>{this.state.comments2}</Text>   
            <Text style={{color:"black",fontSize:20}}>{this.state.j}</Text> 
            <Text style={{color:"black",fontSize:20}}>{this.state.up}</Text>  
            <Text style={{color:"black",fontSize:20}}>{this.state.down}</Text> 
            <Text style={{color:"black",fontSize:20}}>{this.state.sel5}</Text></View>
             : null

         }
          

          <Text style={{height:30}}></Text>
         
          <TouchableOpacity onPress={this.switch1}>
         <CardItem style={{backgroundColor:this.state.color1}}>
         <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
         <Text style={{fontSize:29,color:"black"}}> Are Enjoying</Text>
         </View>
         </CardItem>
         </TouchableOpacity>

            <Text style={{height:30}}></Text>

            <TouchableOpacity onPress={this.switch2}>

         <CardItem style={{backgroundColor:this.state.color2}}>
         <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>

         <Text style={{fontSize:29,color:"black"}}> With React Native</Text>
          </View>
         </CardItem>
         </TouchableOpacity>

            <Text style={{height:220}}></Text>



            

             <FAB buttonColor="dimgray"  onClickAction={this.next1}  />


        </ScrollView>
        
        
             </Container>



         


       
          

        



    );
}
}