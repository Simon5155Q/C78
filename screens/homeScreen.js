import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
     <View style={styles.container}>
         <ImageBackground source={require("../assets/bg_image.png")} style={styles.bgImg}>
         <SafeAreaView style={styles.safeAreaStyle}/>
            <View style = {styles.titleStyle}>
                <Text style={styles.titleText}>ISS Tracker App</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate("ISSLocation")}>
                <Text style={styles.buttonText}>ISS Location</Text>
                <Text style={styles.knowMore}>Know more information</Text>
                <Text style={styles.numbers}>1</Text>
                <Image style={styles.buttonImg} source={require("../assets/iss_icon.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate("meteorScreen")}>
                <Text style={styles.buttonText}>Meteor</Text>
                <Text style={styles.knowMore}>Know more information</Text>
                <Text style={styles.numbers}>2</Text>
                <Image style={styles.buttonImg} source={require("../assets/meteor_icon.png")}></Image>
            </TouchableOpacity>
        </ImageBackground>
    </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    titleText:{
        color:"#000",
        fontSize:40,
        fontWeight:"bold",
        alignSelf:"center"
    },
    safeAreaStyle:{
       marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
    },
    titleStyle:{
        flex:0.15,
        justifyContent:"center",
        alignContent:"center"
    },
    button:{
        backgroundColor:"#fff",
        flex:0.25,
        alignContent:"center",
        borderRadius:30,
        marginLeft:50,
        marginRight:50,
        marginTop:50
    },
    buttonText:{
       color:"#000",
       fontSize:20,
       fontWeight:"bold",
       alignSelf:"center" 
    },
    bgImg:{
       flex:1,
       resizeMode:"cover"
    },
    buttonImg:{
      position:"absolute",
      width:250,
      height:250,
      resizeMode:"contain",
      right:-20,
      top:-100
    },
    knowMore:{
        color:"blue",
        fontSize:13,
        padding:30,
        marginTop:50

    },
    numbers:{
        position:"absolute",
        fontSize:50,
        color:"red",
        zIndex:-1
    }
})
