import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';


import Login  from"./login";
import Home   from"./home";
import Next   from"./next";
import Start  from"./start";






const SimpleApp = StackNavigator({
 
  Login:  { screen: Login },
  Home :  { screen: Home },
  Next :  { screen: Next },
  Start:  { screen: Start},
  
  
  
 

  
  
},{
  headerMode:'a',
  initialRouteName:'Start'
});
export default SimpleApp;