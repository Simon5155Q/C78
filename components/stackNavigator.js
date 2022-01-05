import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import ISSLocationScreen from '../screens/ISSLocationScreen';
import MeteorScreen from '../screens/meteorScreen';

const Stack = createStackNavigator();

export default class Stacknavigator extends Component{
    render(){
        return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName = "home" screenOptions={
                {
                  headerShown:false
                }
              }>
                <Stack.Screen name="home" component={HomeScreen}/>
                <Stack.Screen name="ISSLocation" component={ISSLocationScreen}/>
                <Stack.Screen name="meteorScreen" component={MeteorScreen}/>
              </Stack.Navigator>
            </NavigationContainer>
          );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

