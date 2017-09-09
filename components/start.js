import React, { Component } from 'react';
import {AppRegistry,Text,Image,View,TouchableOpacity,Alert,ScrollView,TextInput,AsyncStorage} from 'react-native';
import { Label,Container, Header, Left, Body, Right, Button, Icon, Title,Card,CardItem,Content ,Tab,Tabs,Form,Input,Item} from 'native-base';
import DatePicker from 'react-native-datepicker';
 import { CheckBox } from 'react-native-elements';
import SegmentTab from 'react-native-segment-tab';
import PhotoUpload from 'react-native-photo-upload';
import SearchInput, { createFilter } from 'react-native-search-filter';






export default class start extends Component {
    
     constructor(){
      	super()
      	this.state={allowturnout:false,changeTab:0,header:"Start",date:"",checked:false,checked1:false,inspector:"",abc:"",selected:0 ,selected2:0,selected3:0,selected4:0,status:false, status1:false,status2:false,status3:false,uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9dqXaoTAYb8lMK2_BtR-F7Rsix31S7k-ZiD73lwdCUv6BfUHSqb28E"}
      	this.logout=this.logout.bind(this);
      	this.getTest=this.getTest.bind(this);
      	this.getTest1=this.getTest1.bind(this);
      	this.getTest2=this.getTest2.bind(this);
      	this.getTest3=this.getTest3.bind(this);
      	this.getTest4=this.getTest4.bind(this);
      	this.getTest5=this.getTest5.bind(this);
      	this.getInspector=this.getInspector.bind(this);
      	this.getTurnout=this.getTurnout.bind(this);
      	this.submit=this.submit.bind(this);
        this.goLogin=this.goLogin.bind(this);
        this.deleteImage=this.deleteImage.bind(this);
        this.checked=this.checked.bind(this);
        this.checked1=this.checked1.bind(this);
        this.checked2=this.checked2.bind(this);
        this.checked3=this.checked3.bind(this);
        this.getTest6=this.getTest6.bind(this);
        this.getTest7=this.getTest7.bind(this);
        this.getTest8=this.getTest8.bind(this);
        this.getTest9=this.getTest9.bind(this);
        this.Up=this.Up.bind(this);
        this.Down=this.Down.bind(this);
        this.getCamera=this.getCamera.bind(this);
        this.getCamera1=this.getCamera1.bind(this);
        this.getCamera2=this.getCamera2.bind(this);
        this.getCamera3=this.getCamera3.bind(this);
        this.nextTab=this.nextTab.bind(this);
        this.nextTab1=this.nextTab1.bind(this);
        this.passData=this.passData.bind(this);
        this.getComments=this.getComments.bind(this);
        this.getComments1=this.getComments1.bind(this);
        this.getComments2=this.getComments2.bind(this);
        this.nameRegex=(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/);
        this.idRegex=(/^[0-9\-\+]{9,15}$/)


       

        
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

      getTest(){
      	if(this.state.checked==false){
      		this.setState({
      			checked:true,
      			a:"Turnout not in list: Yes",
             allowturnout:true
      		})
      	}
      	else{
      		this.setState({
            checked:false,
            a:"",
             allowturnout:false,
             turnout:""

          })
      	}

      }

      getTest1(){
      	if(this.state.checked1==false){
      		this.setState({
      			checked1:true,
      			b:"Swingnose : Yes"

      		})
      	}
      	else{
      		this.setState({
            checked1:false,
            b:""

          })
      	}


      }

      getTest2(){
      	if(this.state.checked2==false){
      		this.setState({
      			checked2:true,
      			c:"Alex Counter 50m from turnout:Yes "
      		})
      	}
      	else{
      		this.setState({
            checked2:false,
            c:""
          })
      	}


      }

       getTest3(){
      	if(this.state.checked3==false){
      		this.setState({
      			checked3:true,
      			d:"GIJ 50m from turnout:Yes"
      		})
      	}
      	else{
      		this.setState({
            checked3:false,
            d:""
          })
      	}


      }


       getTest4(){
      	if(this.state.checked4==false){
      		this.setState({
      			checked4:true,
      			e:"Turnout gring into plain track grind:Yes"
      		})
      	}
      	else{
      		this.setState({
            checked4:false,
            e:""
          })
      	}


      }


       getTest5(){
      	if(this.state.checked5==false){
      		this.setState({
      			checked5:true,
      			f:"Pumping of turnout observed:Yes"
      		})
      	}
      	else{
      		this.setState({
            checked5:false,
            f:""
          })
      	}


      }

      getInspector(text){
      	this.setState({inspector:text})

        if(text==""){
      this.setState({invalidInspector:"Please enter Name"});
      return false;
         }

       else if(!this.nameRegex.test(text)){
            this.setState({invalidInspector: 'Please enter valid Name'});
            return false;
          }


      else{
      this.setState({invalidInspector:""});
      return true;
    }
      }

      getTurnout(text){
      	this.setState({
          turnout:text
        })


        if(text==""){
      this.setState({invalidTurnout:"Please enter ID"});
      return false;
         }

       else if(!this.idRegex.test(text)){
            this.setState({invalidTurnout: 'Please enter valid ID'});
            return false;
          }


      else{
      this.setState({invalidTurnout:""});
      return true;
      }


      }

      submit(){
        this.props.navigation.navigate("Next");

      }


      deleteImage(){
        this.setState({

          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9dqXaoTAYb8lMK2_BtR-F7Rsix31S7k-ZiD73lwdCUv6BfUHSqb28E"

        });
      }


      checked(value:true){
        this.setState({
          checked6:value,
          checked7:false,
          checked8:false,
          checked9:false,
          data:"Remove"
        })

      }

      checked1(value:true){
        
        this.setState({
          checked6:false,
          checked7:value,
          checked8:false,
          checked9:false,
          data:"Control"
        })
      

      }


      checked2(value:true){
        
          this.setState({
           checked6:false,
           checked7:false,
           checked8:value,
           checked9:false,
           data:"Hardface"
        })
        

      }

        checked3(value:true){
          
        this.setState({
          checked6:false,
          checked7:false,
          checked8:false,
          checked9:value,
          data:"Replace"
        })
      

      }

      getTest6(){
        if(this.state.checked6==false){
          this.setState({
            checked6:true,
            g:"New Rail: Yes"
          })
        }
        else{
          this.setState({
            checked6:false
           
          })
        }

      }

      getTest7(){
        if(this.state.checked7==false){
          this.setState({
            checked7:true,
            h:"Height difference :Yes"
          })
        }
        else{
          this.setState({
            checked7:false
            
          })
        }

      }

      getTest8(){
        if(this.state.checked8==false){
          this.setState({
            checked8:true,
            i:"Geometry defects: Yes"
          })
        }
        else{
          this.setState({
            checked8:false
           
          })
        }

      }

      getTest9(){
     if(this.state.checked9==false){
          this.setState({
            checked9:true,
            j:"Fastening Issues :Yes"
          })
        }
        else{
          this.setState({
            checked9:false
           
          })
        }

      }

      Up(text){
        this.setState({up:text})

       if(text==""){
      this.setState({invalidUp:"Please enter Up no."});
      return false;
         }

        else if(!this.idRegex.test(text)){
            this.setState({invalidUp: 'Please enter valid no.'});
            return false;
          }


      else{
      this.setState({invalidUp:""});
      return true;
      }

      }
      Down(text){
        this.setState({down:text})
    
       if(text==""){
      this.setState({invalidDown:"Please enter Down no."});
      return false;
         }

        else if(!this.idRegex.test(text)){
            this.setState({invalidDown: 'Please enter valid no.'});
            return false;
          }


      else{
      this.setState({invalidDown:""});
      return true;
      }


      }

      getCamera(){
        if(this.state.status==false){
          this.setState({status:true})
        }
       
        else if(this.state.uri=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9dqXaoTAYb8lMK2_BtR-F7Rsix31S7k-ZiD73lwdCUv6BfUHSqb28E" && this.state.status==false ){
          this.setState({status:true})
        }

        else if(this.state.uri=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9dqXaoTAYb8lMK2_BtR-F7Rsix31S7k-ZiD73lwdCUv6BfUHSqb28E"&& this.state.status==true){
          this.setState({status:false})
        }

         else if(this.state.uri!=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9dqXaoTAYb8lMK2_BtR-F7Rsix31S7k-ZiD73lwdCUv6BfUHSqb28E" && this.state.status==true ){
          this.setState({status:true})
        }

        else if(this.state.uri!=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9dqXaoTAYb8lMK2_BtR-F7Rsix31S7k-ZiD73lwdCUv6BfUHSqb28E"&& this.state.status==false){
          this.setState({status:true})
        }


        

        

        
      }

       getCamera1(){
        if(this.state.status1==false){
          this.setState({status1:true})
        }
        else{
          this.setState({status1:false})
        }
      }

       getCamera2(){
        if(this.state.status2==false){
          this.setState({status2:true})
        }
        else{
          this.setState({status2:false})
        }
      }

       getCamera3(){
        if(this.state.status3==false){
          this.setState({status3:true})
        }
        else{
          this.setState({status3:false})
        }
      }

      nextTab(){
     
        this.setState({
          header:"Location A-3 sleepers before Turnout",
          
         
        })
       
        
      
      }

      nextTab1(){
        if(this.state.header=="Location A-3 sleepers before Turnout"){
          this.setState({
            header:"Submit Template",
            changeTab:2
          })
        }
      }

      getComments(text){
        this.setState({comments:text})
      }

      getComments1(text){
        this.setState({comments1:text})
      }

      getComments2(text){
        this.setState({comments2:text})
      }


      passData(){

     
     if(this.getInspector(this.state.inspector)==false ){

      Alert.alert("Please Mention Name of Inspector and Date")

     }

     else if(this.state.date==""){
      Alert.alert("Please Mention Name of Inspector and Date")
     }

        else{
        var datas={
        info:{
          date:this.state.date,
          inspector:this.state.inspector,
          a:this.state.a,
          turnout:this.state.turnout,
          b:this.state.b,
          c:this.state.c,
          d:this.state.d,
          e:this.state.e,
          f:this.state.f,
          sel:this.state.sel,
          g:this.state.g,
          comments:this.state.comments,
          h:this.state.h,
          i:this.state.i,
          sel1:this.state.sel1,
          sel2:this.state.sel2,
          sel3:this.state.sel3,
          sel4:this.state.sel4,
          comments1:this.state.comments1,
          data:this.state.data,
          comments2:this.state.comments2,
          j:this.state.j,
          up:this.state.up,
          down:this.state.down,
          sel5:this.state.sel5
          

        }
      }


    AsyncStorage.setItem("Key", JSON.stringify(datas))
   .then((success) =>{

    ;
   })

   this.props.navigation.navigate('Next');
      }

    }

     

     


  render() {

     let pic= {
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIFdQeyai9Citi3re-M4NBPqKYp0X1hs0hQR-QbkaL9j3og83QfXSow"

      };

      let pic1={
        uri:"http://downloadicons.net/sites/default/files/previous-page-arrow-icon-76266.png"
      }

      let pic2={
        uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ic_chevron_right_48px.svg/768px-Ic_chevron_right_48px.svg.png"
      }

    return (
    	
       <Container>

      
        <Header style={{backgroundColor:"white"}}>
         <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
         
            <Button transparent onPress={this.logout}>
            <Image
            style={{height:30,width:30}}
            source={require('../images/logout.png')}
             />
             
            </Button>

         

          

        
       
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
         
            <Text style={{color:"black",fontSize:15}}>{this.state.header}</Text>

            </View>
   
             </View>
              
           
         

          </Header>

          

   
        
         <Tabs >


         
          <Tab heading ="Start" activeTabStyle={{backgroundColor:"white"}} activeTextStyle={{color:"black"}} tabStyle={{backgroundColor:"white"}} textStyle={{color:"black"}}  >
           <ScrollView>
            <View style={{padding:20}}>

          

         <CardItem>
         <DatePicker

         mode="date"
        style={{width: 360}}
        date={this.state.date} 
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2017-09-08"
        maxDate="2200-09-05"
        onDateChange={(date) => {this.setState({date: date})}}

        />
        </CardItem>

        <Form>
        <CardItem>
            <Item>
            <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
             <Text style={{fontSize:18,fontWeight:"bold"}}>Name of inspector</Text>
              <Input 
              placeholder="Name of inspector"
              value={this.state.inspector}
              onChangeText={this.getInspector}
               />

              </View>
            </Item>
            </CardItem>
            <Text style={{color:"red"}}>{this.state.invalidInspector}</Text>

            <CardItem>

          <Item regular>
            <Input placeholder='Select Turnout' />
          </Item>
          </CardItem>

            </Form>


            <TouchableOpacity onPress={this.getTest}>
            <CardItem>
            
           
             <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start"}}>
             <CheckBox 
              
              onPress={this.getTest}
              style={{height:22,width:20}}
                
              checked={this.state.checked}

              >

            </CheckBox>
           
            <Text style={{fontSize:18,fontWeight:"bold"}}> Turnout not in list</Text>
             </View>
           
           

            </CardItem>

             </TouchableOpacity>

           

         
                
          

           <CardItem>
            <Item>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             <Text style={{fontSize:18,fontWeight:"bold"}}>Enter turnout ID</Text>
              <Input 
              placeholder="Enter turnout ID"
              value={this.state.turnout}
              onChangeText={this.getTurnout}
              keyboardType="numeric"
              editable={this.state.allowturnout}
              maxLength={10}
               />
              
              

              </View>
            </Item>


            </CardItem>

            <Text style={{color:"red"}}> {this.state.invalidTurnout}</Text>

          <TouchableOpacity onPress={this.getTest1}>
            <CardItem>

          
            <View style={{flex:3,flexDirection:"row",justifyContent:"space-between"}}>
           
            <Text style={{fontSize:18,fontWeight:"bold"}}>Swingnose</Text>

           
             <CheckBox 
              
              onPress={this.getTest1}
              style={{height:22,width:22}}
              checked={this.state.checked1}

              >

            </CheckBox>
              
            </View>
            

            </CardItem>
            </TouchableOpacity>


          <TouchableOpacity onPress={this.getTest2}>
         
            <CardItem>
            <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
           
            <Text style={{fontSize:18,fontWeight:"bold"}}>Alex Counter 50m from turnout</Text>

           
             <CheckBox 
              
              onPress={this.getTest2}
              style={{height:22,width:22}}
              
            
              
              checked={this.state.checked2}

              >

            </CheckBox>
         
            </View>

            </CardItem>
            </TouchableOpacity>
 

            <TouchableOpacity onPress={this.getTest3}>


            <CardItem>
           

            <View style={{flex:1,justifyContent:"space-between",flexDirection:"row"}}>
           
            <Text style={{fontSize:18,fontWeight:"bold"}}>GIJ 50m from turnout</Text>

           
             <CheckBox 
              
              onPress={this.getTest3}
              style={{height:22,width:22}}
              
            
              
              checked={this.state.checked3}

              >

            </CheckBox>
            
         
            </View>
           


            </CardItem>

            </TouchableOpacity>


           <TouchableOpacity onPress={this.getTest4}>


            <CardItem>
            <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
           
            <Text style={{fontSize:18,fontWeight:"bold"}}>Turnout grind into plain track grind</Text>

           
             <CheckBox 
              
              onPress={this.getTest4}
              style={{height:22,width:22}}
              
            
              
              checked={this.state.checked4}

              >

            </CheckBox>
         
            </View>

           </CardItem>

           </TouchableOpacity>

           <TouchableOpacity onPress={this.getTest5}>

           <CardItem>
            <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
           
            <Text style={{fontSize:18,fontWeight:"bold"}}>Pumping of turnout observed</Text>

           
             <CheckBox 
              
              onPress={this.getTest5}
              style={{height:22,width:22}}
              
            
             
              checked={this.state.checked5}

              >

            </CheckBox>
         
            </View>

            </CardItem>
            </TouchableOpacity>



         <CardItem>
      

      <Text style={{color:"dimgray",fontSize:18,fontWeight:"bold"}}>Fire Risk </Text>


        <SegmentTab
          horizontalWidth={270}
          data={['Low', 'Medium', 'High','Extreme']}
          selected={this.state.selected}
           
           onPress={ index => {
            if(index==0){
            this.setState({
              selected: index,
              sel:"Low"

            })
            }

            else if(index==1){
              this.setState({
              selected: index,
              sel:"Medium"

            })

            }

            else if(index==2){
              this.setState({
              selected: index,
              sel:"High"

            })

            }

            else {
              this.setState({
              selected: index,
              sel:"Extreme"

            })

            }
            

            }}
            


          activeColor="dimgray"

        

        />
        </CardItem>

      

       

<Card style={{height:300}}>
 <CardItem>
 <Text style={{fontSize:18,fontWeight:"bold"}}>15-20 sleepers from start of turnout</Text>
 </CardItem>

<Card>
  <PhotoUpload
   onPhotoSelect={avatar => {
     if (avatar) {
       console.log('Image base64 string: ', avatar)
     }
     
   }}
    >
   <Image
     style={{
       paddingVertical: 30,
       width: 70,
       height: 70
       
     }}
    
     source={{

       uri: this.state.uri 
      
     }}
   />
 </PhotoUpload>
 </Card>

 <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
 <Button transparent onPress={this.deleteImage}>
 <Image 
 source={pic} style={{height:30,width:30}}
/>
</Button>

</View>




 </Card>
        















          





          <View style={{flexDirection:"row",justifyContent:"space-around"}}>

            <CardItem>
        
          <Button onPress={this.submit} style={{backgroundColor:"dimgray",width:170,height:60}}>
          <Image source={pic1} style={{height:25,width:25}}/>


          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
          <Text style={{color:"white",fontSize:20}}> Previous </Text>
          </View>
          </Button>

          </CardItem>

           <CardItem>
         
          <Button onPress={this.nextTab} style={{backgroundColor:"dimgray",width:170,height:60}}>

          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
          <Text style={{color:"white",fontSize:20}}> Next </Text>
          </View>
           <Image source={pic2} style={{height:25,width:25}}/>
          </Button>

          </CardItem>

          </View>   
      

         </View>

         <View >

       





         </View>

         </ScrollView>



        
          </Tab>

      <Tab heading="A"  activeTabStyle={{backgroundColor:"white"}} activeTextStyle={{color:"black"}} tabStyle={{backgroundColor:"white"}} textStyle={{color:"black"}} >
     

         <ScrollView> 
         <View style={{padding:20}}>
   



<Card style={{height:300}}>
 <CardItem>
 <Text style={{fontSize:18,fontWeight:"bold"}}>Straight ahead </Text>
 </CardItem>

<Card>
  <PhotoUpload
   onPhotoSelect={avatar => {
     if (avatar) {
       console.log('Image base64 string: ', avatar)
     }
   }}
    >
   <Image
     style={{
       paddingVertical: 30,
       width: 70,
       height: 70
       
     }}
    
     source={{

       uri: this.state.uri 
      
     }}
   />
 </PhotoUpload>
 </Card>

 <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
 <Button transparent onPress={this.deleteImage}>
 <Image 
 source={pic} style={{height:30,width:30}}
/>
</Button>

</View>




 </Card>



<View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

 <Text style={{fontSize:18}}>New Rail</Text>


  <View style={{flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
  <Button transparent onPress={this.getCamera}>
  <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9dqXaoTAYb8lMK2_BtR-F7Rsix31S7k-ZiD73lwdCUv6BfUHSqb28E"}} style={{height:30,width:30}}/>
  </Button>

            <CheckBox 
              
              onPress={this.getTest6}
              style={{height:22,width:22}}
              checked={this.state.checked6}
            >

            </CheckBox>



  </View>



  </View>

  {this.state.status?
<Card style={{height:300}}>
 <CardItem>
 <Text style={{fontSize:18,fontWeight:"bold"}}>Straight ahead </Text>
 </CardItem>

<Card>
  <PhotoUpload
   onPhotoSelect={avatar => {
     if (avatar) {
       console.log('Image base64 string: ', avatar)
     }
   }}
    >
   <Image
     style={{
       paddingVertical: 30,
       width: 70,
       height: 70
       
     }}
    
     source={{

       uri:this.state.uri
      
     }}
   />
 </PhotoUpload>
 </Card>
 <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
 <Button transparent onPress={this.deleteImage}>
 <Image 
 source={pic} style={{height:30,width:30}}
/>
</Button>
</View>
 </Card>:null

  }

 


         
            <Item>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             <Text style={{fontSize:18,fontWeight:"bold"}}>Comments</Text>
              <Input 
              placeholder="Comments"  style={{fontSize:18}}
              value={this.state.comments}
              onChangeText={this.getComments}
               />

              </View>
            </Item>


            


           

        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

         <Text style={{fontSize:18}}>Height difference  </Text>


          <View style={{flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
          <Button transparent onPress={this.getCamera1} >
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9dqXaoTAYb8lMK2_BtR-F7Rsix31S7k-ZiD73lwdCUv6BfUHSqb28E"}} style={{height:30,width:30}}/>
          </Button>

                    <CheckBox 
                      
                      onPress={this.getTest7}
                      style={{height:22,width:22}}
                      checked={this.state.checked7}
                    >

                    </CheckBox>



          </View>

          </View>

 {this.state.status1?
<Card style={{height:300}}>
 <CardItem>
 <Text style={{fontSize:18,fontWeight:"bold"}}>Straight ahead </Text>
 </CardItem>

<Card>
  <PhotoUpload
   onPhotoSelect={avatar => {
     if (avatar) {
       console.log('Image base64 string: ', avatar)
     }
   }}
    >
   <Image
     style={{
       paddingVertical: 30,
       width: 70,
       height: 70
       
     }}
    
     source={{

       uri: this.state.uri 
      
     }}
   />
 </PhotoUpload>
 </Card>
 <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
 <Button transparent onPress={this.deleteImage}>
 <Image 
 source={pic} style={{height:30,width:30}}
/>
</Button>
</View>
 </Card>:null

  }

       

       
         <Text style={{fontSize:23,color:"black"}}>Track Defects </Text>
         
         <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
         
         <Text style={{fontSize:17}}>Geometry Defects </Text>

          <View style={{flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
          <Button transparent onPress={this.getCamera2}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9dqXaoTAYb8lMK2_BtR-F7Rsix31S7k-ZiD73lwdCUv6BfUHSqb28E"}} style={{height:30,width:30}}/>
          </Button>

                    <CheckBox 
                      
                      onPress={this.getTest8}
                      style={{height:22,width:22}}
                      checked={this.state.checked8}
                    >

                    </CheckBox>



          </View>
           


         </View>

  {this.state.status2?
<Card style={{height:300}}>
 <CardItem>
 <Text style={{fontSize:18,fontWeight:"bold"}}>Straight ahead </Text>
 </CardItem>

<Card>
  <PhotoUpload
   onPhotoSelect={avatar => {
     if (avatar) {
       console.log('Image base64 string: ', avatar)
     }
   }}
    >
   <Image
     style={{
       paddingVertical: 30,
       width: 70,
       height: 70
       
     }}
    
     source={{

       uri: this.state.uri 
      
     }}
   />
 </PhotoUpload>
 </Card>
 <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
 <Button transparent onPress={this.deleteImage}>
 <Image 
 source={pic} style={{height:30,width:30}}
/>
</Button>
</View>
 </Card>:null

  }
         

           <Text style={{fontSize:23,color:"black"}}>Rail Defects </Text>
       
         <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
         
         <Text style={{fontSize:17}}>RCF Gauge Corner </Text>

        
          <Button transparent onPress={this.getCamera3}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9dqXaoTAYb8lMK2_BtR-F7Rsix31S7k-ZiD73lwdCUv6BfUHSqb28E"}} style={{height:30,width:30}}/>
          </Button>

          
          </View>

  {this.state.status3?
<Card style={{height:300}}>
 <CardItem>
 <Text style={{fontSize:18,fontWeight:"bold"}}>Straight ahead </Text>
 </CardItem>

<Card>
  <PhotoUpload
   onPhotoSelect={avatar => {
     if (avatar) {
       console.log('Image base64 string: ', avatar)
     }
   }}
    >
   <Image
     style={{
       paddingVertical: 30,
       width: 70,
       height: 70
       
     }}
    
     source={{

       uri: this.state.uri 
      
     }}
   />
 </PhotoUpload>
 </Card>
 <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
 <Button transparent onPress={this.deleteImage}>
 <Image 
 source={pic} style={{height:30,width:30}}
/>
</Button>
</View>
 </Card>:null

  }
         


       
        

          <SegmentTab
          horizontalWidth={370}
          data={['N', 'Mild', 'Moderate','Severe','Very Severe']}
          selected={this.state.selected1}
           onPress={ index => {
            if(index==0){
            this.setState({
              selected1: index,
              sel1:"N"

            })
            }

            else if(index==1){
              this.setState({
              selected1: index,
              sel1:"Mild"

            })

            }

            else if(index==2){
              this.setState({
              selected1: index,
              sel1:"Moderate"

            })

            }

            else if(index==3) {
              this.setState({
              selected1: index,
              sel1:"Severe"

            })

            }

            else{
              this.setState({
              selected1: index,
              sel1:"Very Severe"

            })
            }
            

            }}
          activeColor="dimgray"
          titleSize={12}
          />

          <Text style={{height:20}}></Text>

       

       



      <Card style={{height:300}}>
         <CardItem>
         <Text style={{fontSize:18,fontWeight:"bold"}}>Straight ahead </Text>
         </CardItem>

        <Card>
          <PhotoUpload
           onPhotoSelect={avatar => {
             if (avatar) {
               console.log('Image base64 string: ', avatar)
             }
           }}
            >
           <Image
             style={{
               paddingVertical: 30,
               width: 70,
               height: 70
               
             }}
            
             source={{

               uri: this.state.uri 
              
             }}
           />
         </PhotoUpload>
         </Card>

         <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
         <Button transparent onPress={this.deleteImage}>
         <Image 
         source={pic} style={{height:30,width:30}}
        />
        </Button>

        </View>
    </Card>


        
          <Text style={{fontSize:17}}> RCF Head </Text>
          <Text style={{height:20}}></Text>

          <SegmentTab
          horizontalWidth={370}
          data={['N', 'Mild', 'Moderate','Severe','Very Severe']}
          selected={this.state.selected2}
          onPress={ index1 => {
            if(index1==0){
            this.setState({
              selected2: index1,
              sel2:"N"

            })
            }

            else if(index1==1){
              this.setState({
              selected2: index1,
              sel2:"Mild"

            })

            }

            else if(index1==2){
              this.setState({
              selected2: index1,
              sel2:"Moderate"

            })

            }

            else if(index1==3) {
              this.setState({
              selected2: index1,
              sel2:"Severe"

            })

            }

            else{
              this.setState({
              selected2: index1,
              sel2:"Very Severe"

            })
            }
            

            }}
          activeColor="dimgray"
          titleSize={12}
          />

          <Text style={{height:20}}></Text>
       
          <Text style={{fontSize:17}}> Shelling </Text>
          <Text style={{height:20}}></Text>

          <SegmentTab
          horizontalWidth={370}
          data={['N', 'Mild', 'Moderate','Severe','Very Severe']}
          selected={this.state.selected3}
          onPress={ index1 => {
            if(index1==0){
            this.setState({
              selected3: index1,
              sel3:"N"

            })
            }

            else if(index1==1){
              this.setState({
              selected3: index1,
              sel3:"Mild"

            })

            }

            else if(index1==2){
              this.setState({
              selected3: index1,
              sel3:"Moderate"

            })

            }

            else if(index1==3) {
              this.setState({
              selected3: index1,
              sel3:"Severe"

            })

            }

            else{
              this.setState({
              selected3: index1,
              sel3:"Very Severe"

            })
            }
            

            }}
          activeColor="dimgray"
          titleSize={12}
          />
          <Text style={{height:20}}></Text>

         
          <Text style={{fontSize:17}}> Plastic Flow </Text>
          <Text style={{height:20}}></Text>

          <SegmentTab
          horizontalWidth={370}
          data={['N', 'Length']}
          selected={this.state.selected4}
           onPress={ index => {
            if(index==0){
            this.setState({
              selected4: index,
              sel4:"N"

            })
            }

            else if(index==1){
              this.setState({
              selected4: index,
              sel4:"Length"

            })

            }

            
            
            }}
          activeColor="dimgray"
          titleSize={12}
          />



            <Item>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             <Text style={{fontSize:18,fontWeight:"bold"}}>Comments</Text>
              <Input 
              placeholder="Comments"  style={{fontSize:18}}
              value={this.state.comments1}
              onChangeText={this.getComments1}
               />

              </View>
            </Item>




             <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
               <CheckBox 
            
              onPress={this.checked}
              style={{height:22,width:22}}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked6}

              >

            </CheckBox>
            
            <Text style={{fontSize:18}}>Remove</Text>
            </View>
             <Text style={{height:20}}></Text>


             <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
               <CheckBox 
            
              onPress={this.checked1}
              style={{height:22,width:22}}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked7}

              >

            </CheckBox>
            
            <Text style={{fontSize:18}}>Control</Text>
            </View>
             <Text style={{height:20}}></Text>

             <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
               <CheckBox 
            
              onPress={this.checked2}
              style={{height:22,width:22}}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked8}

              >

            </CheckBox>
            
            <Text style={{fontSize:18}}>Hardface</Text>
            </View>
             <Text style={{height:20}}></Text>

             <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
               <CheckBox 
            
              onPress={this.checked3}
              style={{height:22,width:22}}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.checked9}

              >

            </CheckBox>
            
            <Text style={{fontSize:18}}>Replace</Text>
            </View>
             <Text style={{height:20}}></Text>

            
              <Input 
              placeholder="Comments"  style={{fontSize:18}}
              value={this.state.comments2}
              onChangeText={this.getComments2}
              />



          <View style={{flexDirection:"row",justifyContent:"space-around"}}>

            <CardItem>
        
          <Button onPress={this.submit} style={{backgroundColor:"dimgray",width:170,height:60}}>
          <Image source={pic1} style={{height:25,width:25}}/>


          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
          <Text style={{color:"white",fontSize:20}}> Previous </Text>
          </View>
          </Button>

          </CardItem>

           <CardItem>
         
          <Button onPress={this.nextTab1} style={{backgroundColor:"dimgray",width:170,height:60}}>

          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
          <Text style={{color:"white",fontSize:20}}> Next </Text>
          </View>
           <Image source={pic2} style={{height:25,width:25}}/>
          </Button>

          </CardItem>

          </View>   



      

         </View>









           

      </ScrollView>




       

          </Tab>

         

          <Tab heading="End" activeTabStyle={{backgroundColor:"white"}} activeTextStyle={{color:"black"}} tabStyle={{backgroundColor:"white"}} textStyle={{color:"black"}}>
           <ScrollView>

           <View style={{padding:16}}>

           <Card style={{height:500}}>
  
        
           <CardItem>  
            <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             
            <Text style={{fontSize:20,fontWeight:"bold"}}>Fastening Issues</Text>

                <CheckBox 
            
              onPress={this.getTest9}
              style={{height:22,width:22}}
              uncheckedIcon='circle-o'
              checkedIcon='check-circle-o'             
              checked={this.state.checked9}

             / >


                </View>

           </CardItem>
         

           <CardItem>

            <Text style={{fontSize:20,fontWeight:"bold"}}>Estimated Pass numbers</Text>

             </CardItem>

           
        
         
             <TextInput
             placeholder="Up" 
             value={this.state.up}
             onChangeText={this.Up}
             keyboardType="numeric"
             maxLength={10}
             />
             <Text style={{color:"red"}}>{this.state.invalidUp}</Text>

            


             <TextInput
             placeholder="Down"
             value={this.state.down}
             onChangeText={this.Down}
              keyboardType="numeric"
               maxLength={10}
             />

             <Text style={{color:"red"}}>{this.state.invalidDown}</Text>


            

            


               <CardItem>

                

                
      

            <Text style={{fontSize:18,fontWeight:"bold"}}>Conditional Rank</Text>

             </CardItem>

             <View style={{padding:16}}>

          <SegmentTab
          verticalHeight={150}
          verticalWidth={350}
          titleSize={100}
          data={['P1-Must be Ground ASAP- defect Grind', 'P2-Should be Ground-Possible defect grind','P3-Cyclic grind only','P4-Can wait']}
          selected={this.state.selected5}
           onPress={ index => {
            if(index==0){
            this.setState({
              selected5: index,
              sel5:"P1-Must be Ground ASAP- defect Grind"

            })
            }

            else if(index==1){
              this.setState({
              selected5: index,
              sel5:"P2-Should be Ground-Possible defect grind"

            })

            }

            else if(index==2){
              this.setState({
              selected5: index,
              sel5:"P3-Cyclic grind only"

            })

            }

            else {
              this.setState({
              selected5: index,
              sel5:"P4-Can wait"

            })

            }
            

            }}
            

          activeColor="black"
          titleSize={12}
          orientation="vertical"
          />
          </View>

        
       


           </Card>


          <View style={{flexDirection:"row",justifyContent:"space-around"}}>

            <CardItem>
        
          <Button onPress={this.submit} style={{backgroundColor:"dimgray",width:170,height:60}}>
          <Image source={pic1} style={{height:25,width:25}}/>


          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
          <Text style={{color:"white",fontSize:20}}> Previous </Text>
          </View>
          </Button>

          </CardItem>

           <CardItem>
         
          <Button onPress={this.passData} style={{backgroundColor:"dimgray",width:170,height:60}}>

          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
          <Text style={{color:"white",fontSize:20}}> Save </Text>
          </View>
           
          </Button>

          </CardItem>

          </View>   







           </View>

           </ScrollView>





          </Tab>




          </Tabs>

          

          
         
          

          



        
          </Container>
        


    	);
    }
}