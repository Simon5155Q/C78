import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default class ISSLocationScreen extends Component {

constructor(props){
    super(props);
    this.state={
        location:{}
    }
}

getISSLocation=()=>{
    axios.get("https://api.wheretheiss.at/v1/satellites/25544").then(response=>{
        this.setState({
          location:response.data  
        })
    }).catch(error=>{
        Alert.alert(error.message);
    })
}

componentDidMount(){
    this.getISSLocation();
}

render(){
    if(Object.keys(this.state.location).length === 0){
        return(<Text>Loading</Text>)
    }
    else{
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.bgImg} source={require("../assets/iss_bg.jpg")}>       
                <SafeAreaView style={styles.safeAreaStyle}/>
                    <View style={styles.titleStyle}>
                        <Text style={styles.titleText}>ISS Location</Text>                        
                    </View>
                        <View style={styles.mapViewStyle}>
                            <MapView region={{
                                latitude:this.state.location.latitude,
                                longitude:this.state.location.longitude,
                                latitudeDelta:100,
                                longitudeDelta:100
                            }} 
                            style={styles.mapStyle}>
                                <Marker coordinate={{latitude:this.state.location.latitude,longitude:this.state.location.longitude}}>
                                    <Image source={require("../assets/iss_icon.png")} style={styles.markerImgStyle}></Image>
                                </Marker>
                            </MapView>
                        </View>
            </ImageBackground>
        </View>
            
            )
        }
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
       resizeMode:'repeat',
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
    },
    mapViewStyle:{
        flex:0.5  
    },
    mapStyle:{
        width:"100%",
        height:"100%"
    },
    markerImgStyle:{
        width:30,
        height:30
    }
})

