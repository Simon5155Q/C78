import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stacknavigator from './components/stackNavigator';
import 'react-native-gesture-handler';


export default class App extends Component{
  render(){
    return (
      <Stacknavigator/>
    );
  }
}


