import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MeteorScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
            <Text style={{color:"#fff"}}>Meteor</Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#000",
        justifyContent:"center",
        alignContent:"center"
    }
})
